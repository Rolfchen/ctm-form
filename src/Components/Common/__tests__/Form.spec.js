import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { Form } from "../Form";

describe("src/Components/Common/Form", () => {
  it("can render form", () => {
    const stubProps = {
      className: "test-Form",
    };

    const mockForm = shallow(
      <Form {...stubProps}>
        <div className="test-child">Child</div>
      </Form>
    );
    expect(mockForm.find("form").prop("className")).to.contain("test-Form");
    expect(mockForm.find(".test-child")).to.have.length(1);
  });
});
