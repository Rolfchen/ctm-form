import { expect } from "chai";
import { getDefaultUserContext } from "../getDefaultUserContext";

describe("src/Context/Helpers/getDefaultUserContext", () => {
  it("can get default user context", () => {
    const mockDefaultContext = getDefaultUserContext();

    expect(mockDefaultContext.progress.step).to.equal(1);
    expect(mockDefaultContext.data.details).to.exist;
    expect(mockDefaultContext.data.address).to.exist;
    expect(mockDefaultContext.validation.details.isValid).to.equal(true);
    expect(mockDefaultContext.validation.address.isValid).to.equal(true);
  });
});
