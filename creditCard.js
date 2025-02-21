function obscureCreditCard(cardNumber) {
    if (cardNumber.length < 12 || cardNumber.length > 16) {
      return "Invalid Credit Card Number";
    }
    const lastFour = cardNumber.slice(-4);
    const obscuredSection = '*'.repeat(cardNumber.length - 4);
  
    return obscuredSection + lastFour;
  }
  
  module.exports = obscureCreditCard;