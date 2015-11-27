defmodule Taipeihack2015.PageController do
  use Taipeihack2015.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
