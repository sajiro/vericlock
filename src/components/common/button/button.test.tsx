import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button component", () => {
  it("renders button with label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onPress callback when clicked", () => {
    const onPressMock = jest.fn();
    render(<Button onPress={onPressMock} label="Click me" />);

    fireEvent.click(screen.getByText("Click me"));
    expect(onPressMock).toHaveBeenCalled();
  });

  /* it('has correct styles', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toHaveStyleRule('background-color', '#e97b23');
  }); */
});
