defmodule GSMLG.Application do
  use Application

  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec

    topologies = [
      gsmlg: [
        strategy: Cluster.Strategy.Kubernetes,
        config: [
          mode: :ip,
          kubernetes_ip_lookup_mode: :pods,
          kubernetes_node_basename: "#{GSMLG.name}",
          kubernetes_selector: System.get_env("SELECTOR", "gsmlg.org/app=blog"),
          kubernetes_namespace: System.get_env("NAMESPACE", "#{GSMLG.name}"),
          polling_interval: 10_000
        ]
      ]
    ]


    # Define workers and child supervisors to be supervised
    children = [
      # Start the Ecto repository
      supervisor(GSMLG.Repo, []),
      # Start the endpoint when the application starts
      supervisor(GSMLGWeb.Endpoint, []),
      {Phoenix.PubSub, [name: GSMLG.PubSub, adapter: Phoenix.PubSub.PG2]},
      # Start your own worker by calling: GSMLG.Worker.start_link(arg1, arg2, arg3)
      # worker(GSMLG.Worker, [arg1, arg2, arg3]),
      supervisor(GSMLG.Node.Supervisor, []),
      supervisor(GSMLG.Chess.Supervisor, []),
      {Cluster.Supervisor, [topologies, [name: GSMLG.ClusterSupervisor]]},
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: GSMLG.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    GSMLGWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
