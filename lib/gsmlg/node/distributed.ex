defmodule Gsmlg.Node.Distributed do
  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, nil, name: :distributed_state_process);
  end

  def start_node(name) do
    GenServer.call(__MODULE__, {:start, name})
  end

  def stop_node() do
    GenServer.call(__MODULE__, :stop)
  end

  def init(_) do
    state = [alive?: Node.alive?, self: Node.self, pid: nil]
    {:ok, state}
  end

  def handle_call({:start, name}, _from, state) do
    pid = case Node.start(name) do
      {:ok, pid} -> pid
      {:error, {:already_started, pid}} -> pid
      _ -> nil
    end
    state = state
    |> Keyword.put(:alive?, Node.alive?)
    |> Keyword.put(:self, Node.self)
    |> Keyword.put(:pid, pid)
    {:reply, {:ok, pid}, state}
  end

  def handle_call(:stop, _from, state) do
    Node.stop
    state = state
    |> Keyword.put(:alive?, Node.alive?)
    |> Keyword.put(:self, Node.self)
    |> Keyword.put(:pid, nil)
    {:replay, {:ok}, state}
  end

end
