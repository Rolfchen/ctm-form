import React from "react";
import { expect } from "chai";
import getValidation from "../getValidation";

describe("src/Helpers/Validation/getValidation", () => {
  it("can validate details errors", () => {
    const stubDetails = {
      firstName: "Tester",
      lastName: "",
      email: "a",
      phone: "14420002",
    };

    const mockResult = getValidation("details", stubDetails);

    expect(mockResult.isValid).to.equal(false);
    expect(mockResult.items.firstName.isValid).to.equal(true);
    expect(mockResult.items.email.isValid).to.equal(false);
    expect(mockResult.items.phone.isValid).to.equal(false);
  });

  it("can validate address errors", () => {
    const stubAddress = {
      streetNum: "aa4",
      streetName: "",
      suburb: "a",
      postcode: "1000",
    };

    const mockResult = getValidation("address", stubAddress);

    expect(mockResult.isValid).to.equal(false);
    expect(mockResult.items.postcode.isValid).to.equal(false);
    expect(mockResult.items.streetNum.isValid).to.equal(false);
    expect(mockResult.items.postcode.message).to.equal(
      "Please provide a valid Australian postcode (excl. PO Boxes)"
    );
  });

  it("can validate true", () => {
    const stubAddress = {
      streetNum: "1234",
      streetName: "Test",
      streetType: "St",
      suburb: "Brisbane",
      postcode: "4000",
    };

    const stubDetails = {
      firstName: "Test",
      lastName: "Ter",
      email: "valid@test.com",
      phone: "0400333777",
    };

    const mockAddressResult = getValidation("address", stubAddress);
    const mockDetailResult = getValidation("details", stubDetails);
    const mockDetailVariatnResult = getValidation("details", {
      ...stubDetails,
      phone: "02 4567 1224",
    });

    expect(mockAddressResult.isValid).to.equal(true);
    expect(mockDetailResult.isValid).to.equal(true);
    expect(mockDetailVariatnResult.isValid).to.equal(true);
  });
});
