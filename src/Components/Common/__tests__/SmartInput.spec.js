import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { SmartInput } from "../SmartInput";

describe("src/Components/Common/SmartInput", () => {
  it("can render input", () => {
    const stubProps = {
      name: "Test input",
      helpText: "Help",
      value: "2",
      className: "test-Class",
      placeholder: "Placeholder",
      type: "number",
      label: "Input label",
      required: true,
    };

    const mockComponent = shallow(<SmartInput {...stubProps} />);

    expect(mockComponent.find("input").prop("name")).to.equal(stubProps.name);
    expect(mockComponent.find("input").prop("value")).to.equal(stubProps.value);
    expect(mockComponent.find(".HelpText").text()).to.equal(stubProps.helpText);
    expect(mockComponent.find("label").text()).to.equal(stubProps.label);
  });

  it("can become dropdown with options", () => {
    const stubOptions = [
      {
        value: "",
        text: "default",
      },
      {
        value: "2",
        text: "Two",
      },
    ];
    const stubProps = {
      name: "Test dropdown",
      type: "select",
      helpText: "Help",
      value: "2",
      className: "test-Class",
      placeholder: "Placeholder",
      label: "Dropdown label",
      required: true,
      options: stubOptions,
    };

    const mockComponent = shallow(<SmartInput {...stubProps} />);

    expect(mockComponent.find("select")).to.have.length(1);
    expect(mockComponent.find("option")).to.have.length(2);
    expect(mockComponent.find("select").prop("value")).to.equal("2");
  });

  it("can handle onChange", () => {
    const mockCallback = jest.fn((e, name) => name);
    const stubProps = {
      value: "2",
      className: "test-Class",
      placeholder: "Placeholder",
      label: "Label",
      onChange: mockCallback,
      name: "test name",
    };

    const mockSelectComponent = shallow(
      <SmartInput {...stubProps} type="select" />
    );

    expect(mockSelectComponent.find("select").prop("value")).to.equal(
      stubProps.value
    );

    mockSelectComponent.find("select").simulate(
      "change",
      {
        persist: jest.fn(),
        target: { value: "3" },
      },
      "testSelect"
    );

    expect(mockCallback.mock.calls.length).to.equal(1);
    expect(mockCallback.mock.results[0].value).to.equal(stubProps.name);
  });
});
