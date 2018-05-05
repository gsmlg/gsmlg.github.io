defmodule Gsmlg.Chess.Room do
  use GenServer
  alias Gsmlg.Chess.ChessPieces

  def start_link() do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
  end

  def start_room() do
    GenServer.call(__MODULE__, :start_room)
  end

  def get_pieces() do
    GenServer.call(__MODULE__, :get_pieces)
  end

  def move_chess(payload) do
    GenServer.call(__MODULE__, {:move_chess, payload})
  end

  def init(_) do
    state = %{start?: false, done?: false, pieces: []}
    {:ok, state}
  end

  def handle_call(:start_room, _from, state) do
    pieces = ChessPieces.init_pieces
    state = state
    |> Map.put(:pieces, pieces)
    |> Map.put(:start?, true)
    {:reply, {:ok, pieces}, state}
  end
  def handle_call(:get_pieces, _from, state) do
    pieces = state |> Map.fetch!(:pieces)
    {:reply, {:ok, pieces}, state}
  end
  def handle_call({:move_chess, %{"item" => %{"id" => id}, "position" => %{"x" => x, "y" => y}}}, _from, state) do
    pieces = state
    |> Map.fetch!(:pieces)
    |> Enum.map(fn(p) ->
      if (p[:id] == id) do
        Map.put(p, :position, %{x: x, y: y})
      else
        p
      end
    end)
    newState = state |> Map.put(:pieces, pieces)
    {:reply, {:ok, pieces}, newState}
  end
end
