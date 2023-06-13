const Calculator = require("./calculator");

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("calculatePrice", () => {
    it("should calculate the total price without discounts", () => {
      const order = {
        red: 1,
        green: 1,
      };
      const hasMemberCard = false;

      const totalPrice = calculator.calculatePrice(order, hasMemberCard);

      expect(totalPrice).toBe(90);
    });

    it("should apply the member card discount", () => {
      const order = {
        red: 1,
        green: 1,
      };
      const hasMemberCard = true;

      const totalPrice = calculator.calculatePrice(order, hasMemberCard);

      expect(totalPrice).toBe(81);
    });

    it("should apply the quantity discount for Orange sets", () => {
      const order = {
        orange: 3,
      };
      const hasMemberCard = false;

      const totalPrice = calculator.calculatePrice(order, hasMemberCard);

      expect(totalPrice).toBe(342);
    });

    it("should apply the quantity discount for Pink sets", () => {
      const order = {
        pink: 4,
      };
      const hasMemberCard = false;

      const totalPrice = calculator.calculatePrice(order, hasMemberCard);

      expect(totalPrice).toBe(304);
    });

    it("should apply the quantity discount for Green sets", () => {
      const order = {
        green: 5,
      };
      const hasMemberCard = false;

      const totalPrice = calculator.calculatePrice(order, hasMemberCard);

      expect(totalPrice).toBe(190);
    });

    it("should apply both member card discount and quantity discount", () => {
      const order = {
        orange: 2,
        pink: 2,
      };
      const hasMemberCard = true;

      const totalPrice = calculator.calculatePrice(order, hasMemberCard);

      expect(totalPrice).toBe(342);
    });
  });
});
