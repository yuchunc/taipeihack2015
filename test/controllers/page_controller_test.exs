defmodule Taipeihack2015.PageControllerTest do
  use Taipeihack2015.ConnCase

  test "GET /" do
    conn = get conn(), "/"
    assert html_response(conn, 200) =~ "Welcome to Phoenix!"
  end
end
