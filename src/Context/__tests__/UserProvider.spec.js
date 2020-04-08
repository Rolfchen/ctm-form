import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { UserProvider } from "../UserProvider";
import { UserContext } from "../UserContext";

describe("src/Context/UserProvider", () => {
  it("can render a user provider with user context", () => {
    const mockConsumer = ({ progress, data, validation, dispatch }) => {
      return (
        <div className="testConsumer">
          <div className="progress">{progress.step}</div>
          <div className="testName">{data.details.testName}</div>
          <button
            onClick={() => {
              dispatch({
                type: "SET_USER_DETAIL",
                name: "testName",
                value: "Tester",
              });
            }}
            className="testButton"
          >
            Test Button
          </button>
        </div>
      );
    };

    const mockComponent = mount(
      <UserProvider>
        <UserContext.Consumer>{mockConsumer}</UserContext.Consumer>
      </UserProvider>
    );
    expect(mockComponent.find(".progress").text()).to.equal("1");
    expect(mockComponent.find(".testName").text()).to.equal("");
    mockComponent.find(".testButton").invoke("onClick")();
    expect(mockComponent.find(".testName").text()).to.equal("Tester");
  });
});
