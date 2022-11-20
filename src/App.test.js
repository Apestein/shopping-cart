import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"
import Home from "./Home"
import Products from "./Products"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"

test("renders heading", () => {
  const { getByRole } = render(<App />, { wrapper: BrowserRouter })
  expect(getByRole("heading").textContent).toMatch("Fake Shop")
})

describe("App component", () => {
  it("renders App base page layout", () => {
    const { container } = render(<App />, { wrapper: BrowserRouter })
    expect(container).toMatchSnapshot()
  })
  it("update cart on click", () => {
    act(() => {
      render(<Products />)
    })
    const buttons = screen.getAllByRole("button")
    act(() => {
      userEvent.click(buttons[0])
    })
    expect(screen.getByRole("article").toBeInTheDocument())
  })
})
