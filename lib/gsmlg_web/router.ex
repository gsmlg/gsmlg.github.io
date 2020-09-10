defmodule GSMLGWeb.Router do
  use GSMLGWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", GSMLGWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index

  end

  # Other scopes may use custom stacks.
  scope "/api", GSMLGWeb do
    pipe_through :api

    get "/nodes", NodeController, :index
    resources "/blogs", BlogController, only: [:index, :create, :update, :show]

  end

  scope "/", GSMLGWeb do
    pipe_through :browser # Use the default browser stack

    get "/*not_found", PageController, :not_found

  end
end
