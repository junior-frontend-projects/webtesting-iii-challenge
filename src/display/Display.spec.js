// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";
import {render} from "@testing-library/react";

afterEach(rtl.cleanup)

// test("Fake Test", () => {
//   expect(true).toBeTruthy();
// })

test("defaults to unlocked and open", () => {
  const {getByText} = render (<Display/>);
  const unlocked = getByText(/unlocked/i);
  const open = getByText(/open/i);

  expect(unlocked).toBeDefined();
  expect(open).toBeDefined();
});

test("displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {
  var toggled = true;

  const toggler = () => {
      toggled = false;
  };

  const {getByText, findByText} = render (<Display closed={toggled}/>);

  const closed = getByText(/closed/i);

  expect(closed).toBeDefined();

  toggler();

  const open = findByText(/open/i);
  expect(open).toBeDefined();
});

test("displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {
var toggled = false;

const toggler = () => {
    toggled = true;
};

const {getByText, findByText} = render (<Display locked={toggled}/>);

const unlocked = getByText(/unlocked/i);

expect(unlocked).toBeDefined();

toggler();

const locked = findByText(/locked/i);
expect(locked).toBeDefined();
});

test("when locked or closed use the red-led class", () => {
const {container} = render(<Display locked={true} closed={true} />);
const redleds = container.querySelectorAll('.red-led');
expect(redleds.length).toBe(2);
});

test("when unlocked or open use the green-led class", () => {
const {container} = render(<Display locked={false} closed={false} />);
const greenleds = container.querySelectorAll('.green-led');
expect(greenleds.length).toBe(2);
});