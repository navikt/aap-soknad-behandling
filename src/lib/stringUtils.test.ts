import { isTrue } from "./stringUtils";

describe("isTrue", () => {
  test("er true", () => {
    expect(isTrue("true")).toBe(true);
    expect(isTrue("TRUE")).toBe(true);
    expect(isTrue("tRuE")).toBe(true);
  });

  test("er ikke true", () => {
    expect(isTrue("false")).toBe(false);
    expect(isTrue("nope")).toBe(false);
    expect(isTrue("construe")).toBe(false);
    expect(isTrue("trueness")).toBe(false);
    expect(isTrue(null)).toBe(false);
    expect(isTrue(undefined)).toBe(false);
  });
});
