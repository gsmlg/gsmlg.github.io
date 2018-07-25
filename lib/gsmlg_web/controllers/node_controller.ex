defmodule GsmlgWeb.NodeController do
  use GsmlgWeb, :controller

  def index(conn, _params) do
    state = Gsmlg.Node.Self.get_state
    conn
    |> json(%{state: %{name: state.self, isAlive: state.alive?, list: Node.list}})
  end

end
