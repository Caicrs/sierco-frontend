import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import MyTest, { Props } from "../myTest";
import { Router } from "react-router-dom";

describe("MyTest", () => {
  it("Simple props test", async () => {
    render(<MyTest username="caic" />);
    const myProps = screen.getByText(/caic/i);
    expect(myProps).toBeInTheDocument();
  });

  it("Simple input test", () => {
   render( <MyTest username="caic"/>)
   const inputElement = screen.getByPlaceholderText(/Username here/i) as HTMLInputElement;
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  it("Simple button test", () => {
    render( <MyTest username="caic"/>)
    const inputElement = screen.getByTestId("color1")
    fireEvent.click(inputElement)
    const text = screen.getByText(/blue/i)
    expect(text).toBeInTheDocument()
   });
});
