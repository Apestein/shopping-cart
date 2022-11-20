import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

it("renders heading", () => {
  const { getByRole } = render(<App />)
  expect(getByRole("heading").textContent.toMatch("Fake Shop"))
})
