class Calculator {
  constructor() {
    this.itemPrices = {
      red: 50,
      green: 40,
      blue: 30,
      yellow: 50,
      pink: 80,
      purple: 90,
      orange: 120,
    };
  }

  calculatePrice(order, hasMemberCard) {
    let totalPrice = 0;

    for (const item in order) {
      if (this.itemPrices.hasOwnProperty(item)) {
        const quantity = order[item];
        const price = this.itemPrices[item];
        const discountedPrice = this.calculateDiscountedPrice(
          item,
          price,
          quantity
        );

        totalPrice += discountedPrice;
      }
    }

    if (hasMemberCard) {
      totalPrice = this.applyMemberCardDiscount(totalPrice);
    }

    return totalPrice;
  }

  calculateDiscountedPrice(item, price, quantity) {
    const isEligibleForDiscount =
      ["orange", "pink", "green"].includes(item) && quantity >= 2;

    if (isEligibleForDiscount) {
      const discountPercentage = 0.05;
      return price * quantity * (1 - discountPercentage);
    }

    return price * quantity;
  }

  applyMemberCardDiscount(totalPrice) {
    const discountPercentage = 0.1;
    return totalPrice * (1 - discountPercentage);
  }
}

module.exports = Calculator;
