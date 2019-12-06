// Test away!
import React from "react";
// import * as rtl from "react-testing-library";
import { fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import {render} from "@testing-library/react";
import Controls from "./Controls";

// afterEach(rtl.cleanup);

// describe('Controls', () => {
//   it('should be defined', () => {
//     expect(Controls).toBeDefined();
//   });
//   //   expect(Controls).toMatchSnapshot();
//   // });
//  });

test("provide buttons to toggle the closed and locked states", () => {
  const {getByText} = render(<Controls />);
  const lockedbtn  = getByText(/lock gate/i);
  const closebtn = getByText(/close gate/i);

  expect(lockedbtn).toBeDefined();
  expect(closebtn).toBeDefined();
});

test("buttons' text changes to reflect the state the door will be in if clicked", () => {

  const locked = false;
  const closed = false;
  const toggleClosed = jest.fn();

  const {getByText, findByText} = render(
    <Controls locked={locked} closed={closed} toggleClosed={toggleClosed} />)

  const closedBtn = getByText(/close gate/i);

  fireEvent.click(closedBtn);

  const openBtn = findByText(/open gate/i);

  expect(openBtn).toBeDefined();
  expect(toggleClosed).toHaveBeenCalled();
});