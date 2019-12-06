// Test away
import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react";

afterEach(rtl.cleanup)

// test("Fake Test", () => {
//   expect(true).toBeTruthy();
// })

test("Component renders", () => {
  render(<Dashboard />);
});

test("shows controls and display", () => {
    const { getByText } = render(<Dashboard />);

    const display = getByText(/open/i)
    const controls = getByText(/close gate/i)

    expect(display).toBeDefined();
    expect(controls).toBeDefined();
})