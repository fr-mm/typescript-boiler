import Money from "domain/valueObjects/money";

it("should", () => {
  const m = new Money(1);
  expect(m.value).toBe(1);
});
