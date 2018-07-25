defmodule Gsmlg.Node.Others do
  use GenServer

  def start_link() do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__);
  end

  def add(name) when is_atom(name) do
    GenServer.call(__MODULE__, {:add, name})
  end

  def remove(name) when is_atom(name) do
    GenServer.call(__MODULE__, {:remove, name})
  end

  def get_nodes do
    case GenServer.call(__MODULE__, :get_state) do
      {:ok, %{nodes: nodes}} -> nodes
      _ -> nil
    end
  end

  def list do
    [
      :"gsmlg@beijing.gsmlg.org",
      :"gsmlg@london.gsmlg.org",
      :"gsmlg@newyork.gsmlg.org",
      :"gsmlg@singapore.gsmlg.org",
    ] |> List.delete(Gsmlg.Node.Self.name)
  end

  def init(_) do
    state = %{nodes: list}
    Process.send_after(__MODULE__, :keep_alive, 60000)
    {:ok, state}
  end

  def handle_call({:add, name}, _from, %{nodes: nodes} = state) do
    newState = state
    |> Map.put(:nodes, nodes ++ [name])
    Node.connect(name)
    {:reply, {:ok}, newState}
  end

  def handle_call({:remove, name}, _from, %{nodes: nodes} = state) do
    newState = state
    |> Map.put(:nodes, List.delete(nodes, name))
    Node.disconnect(name)
    {:reply, {:ok}, newState}
  end

  def handle_call(:get_state, _from, state) do
    {:reply, {:ok, state}, state}
  end

  def handle_info(:keep_alive, %{nodes: nodes} = state) do
    Enum.each(Node.list, fn(n) ->
      if !Enum.member?(nodes, n), do: Node.disconnect(n)
    end)
    Enum.each(nodes, fn(n) ->
      if Enum.member?(Node.list, n), do: Node.ping(n), else: Node.connect(n)
    end)
    Process.send_after(__MODULE__, :keep_alive, 60000)
    {:noreply, state}
  end
end
