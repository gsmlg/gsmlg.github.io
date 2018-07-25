defmodule Gsmlg.Node.Self do
  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__);
  end

  def start do
    GenServer.call(__MODULE__, :start)
  end

  def stop do
    GenServer.call(__MODULE__, :stop)
  end

  @doc """
  get node state
  """
  def get_state do
    case GenServer.call(__MODULE__, :get_state) do
      {:ok, state} -> state
      _ -> nil
    end
  end

  @doc """
  node name, used by Node.start
  """
  def name do
    :"#{Gsmlg.name}@#{Gsmlg.hostname}"
  end

  def init(_) do
    state = %{alive?: Node.alive?, self: Node.self, pid: nil, restart?: true}
    Process.send_after(__MODULE__, :keep_alive, 60000)
    {:ok, state}
  end

  def handle_call(:start, _from, state) do
    pid = case Node.start(name) do
      {:ok, pid} -> pid
      {:error, {:already_started, pid}} -> pid
      _ -> nil
    end
    newState = state
    |> Map.put(:alive?, Node.alive?)
    |> Map.put(:self, Node.self)
    |> Map.put(:pid, pid)
    |> Map.put(:restart?, true)
    {:reply, {:ok, pid}, newState}
  end

  def handle_call(:stop, _from, state) do
    Node.stop
    newState = state
    |> Map.put(:alive?, Node.alive?)
    |> Map.put(:self, Node.self)
    |> Map.put(:pid, nil)
    |> Map.put(:restart?, false)
    {:reply, {:ok}, newState}
  end

  def handle_call(:get_state, _from, state) do
    {:reply, {:ok, state}, state}
  end

  def handle_info(:keep_alive, state) do
    case {Map.fetch!(state, :restart?), Map.fetch!(state, :alive?)} do
      {true, false} -> start
      _ -> nil
    end
    Process.send_after(__MODULE__, :keep_alive, 60000)
    {:noreply, state}
  end
end
