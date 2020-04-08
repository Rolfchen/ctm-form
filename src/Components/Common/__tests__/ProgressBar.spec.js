import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { ProgressBar } from "../ProgressBar";

describe("src/Components/Common/ProgressBar", () => {
  it("can render progress bar", () => {
    const stubProps = {
      totalSteps: 4,
    };
    const mockComponent = shallow(<ProgressBar {...stubProps} />);

    expect(mockComponent).to.exist;
    expect(mockComponent.find("li")).to.have.length(stubProps.totalSteps);
  });
});
