import { describe, expect } from "@jest/globals";
import { convertLineBreaksToHtml } from "./helper";

describe("convertLineBreaksToHtml", () => {
  it("convertLineBreaksToHtml preserve spaces", () => {
    const expected = "test data";
    expect(convertLineBreaksToHtml("test data")).toBe(expected);
  });
});
