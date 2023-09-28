import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const monthly = screen.getByText(/Monthly calendar/i);
  const yearly = screen.getByText(/Yearly calendar/i);
  expect(monthly).toBeInTheDocument();
  expect(yearly).toBeInTheDocument();
});
