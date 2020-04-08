import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { SmartButton } from "../SmartButton";
import { BrowserRouter } from "react-router-dom";

jest.mock("");

describe("src/Components/Common", () => {
  it("can render SmartButton", () => {
    const stubProps = {
      name: "Test Button",
      className: "test-Class",
      disabled: false,
      onClick: jest.fn(),
    };

    // SmartButon has useHistory, and needs to be wrapped by context
    const mockComponentWrapper = shallow(
      <BrowserRouter>
        <SmartButton {...stubProps}>This is a button</SmartButton>
      </BrowserRouter>
    );
    const mockComponent = mockComponentWrapper.find(SmartButton);
    console.log(mockComponent.debug());
    expect(mockComponent.prop("name")).to.equal(stubProps.name);
    expect(mockComponent.prop("className")).to.contain("test-Class");
    expect(mockComponent.prop("disabled")).to.equal(stubProps.disabled);
  });

  it("can handle click", () => {
    const mockCallback = jest.fn();
    const stubProps = {
      name: "Test Button",
      className: "test-Class",
      disabled: false,
      onClick: mockCallback,
    };
    const mockComponentWrapper = shallow(
      <BrowserRouter>
        <SmartButton {...stubProps}>This is a button</SmartButton>
      </BrowserRouter>
    );
    const mockComponent = mockComponentWrapper.find(SmartButton);
    mockComponent.simulate("click");

    expect(mockCallback.mock.calls.length).to.equal(1);
  });
});
