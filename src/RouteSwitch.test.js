import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"
import Home from "./Home"
import Products from "./Products"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"

describe("App component", () => {
  it("renders App base page layout", () => {
    const { container } = render(<App />, { wrapper: BrowserRouter })
    expect(container).toMatchSnapshot()
  })
  it("update cart on click", () => {
    render(<App />)
    //const button = screen.getByRole("button", { name: "Shop Now" })
    //userEvent.click(button)
    expect(screen.getByRole("article").toBeInTheDocument())
  })
})
