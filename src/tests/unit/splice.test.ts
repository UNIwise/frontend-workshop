import assert from "assert";

describe("splice()", () => {
  it("should return [2, 3] when called with [1, 2, 3] and 1", () => {
    assert.deepStrictEqual([1, 2, 3].splice(1), [2, 3]);
  });

  it("should return [2, 3] when called with [1, 2, 3] and 1, 2", () => {
    assert.deepStrictEqual([1, 2, 3].splice(1, 2), [2, 3]);
  });
});
