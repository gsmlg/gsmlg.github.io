defmodule GsmlgWeb.ChessChannel do
  use Phoenix.Channel
  alias Guardian.Phoenix.Socket
  alias Phoenix.Socket.Broadcast
  alias Gsmlg.Chess.Room
  require Logger

  def join("room:chess", msg, socket) do
    send(self(), {:after_join, msg})
    {:ok, socket}
  end

  def handle_info({:after_join, _msg}, socket) do
    {:ok, pieces} = Room.get_pieces
    push socket, "init_pieces", %{pieces: pieces}
    {:noreply, socket}
  end

  def handle_info(%Broadcast{topic: _, event: event, payload: payload}, socket) do
    push socket, event, payload
    {:noreply, socket}
  end

  def terminate(_reason, socket) do
    Socket.current_resource(socket)
    :ok
  end

  def handle_in("start", _payload, socket) do
    {:ok, pieces} = Room.start_room
    push socket, "init_pieces", %{pieces: pieces}
    {:noreply, socket}
  end
  def handle_in("move_chess", payload, socket) do
    Room.move_chess(payload)
    broadcast!(socket, "move_chess_remote", payload)
    {:noreply, socket}
  end
  def handle_in("new:msg", _msg, socket) do
    {:noreply, socket}
  end
end
