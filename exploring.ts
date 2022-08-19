abstract class PaymentProcessor {
  abstract amount: number;
  abstract pay(): void;
}

class PaypalProcessor extends PaymentProcessor {
  amount: number;

  constructor(dollars: number) {
    super();
    this.amount = dollars;
  }

  pay() {
    console.log(`Paying with paypal ${this.amount} dollars 💰`);
  }
}

class StripeProcessor extends PaymentProcessor {
  amount: number;
  
  constructor(cents: number) {
    super();
    this.amount = cents;
  }

  pay() {
    this.amount = this.centsToDollars();
    console.log(`Paying with stripe ${this.amount} dollars 💸`);
  }

  private centsToDollars(): number {
    return this.amount / 100;
  }
}

const paypal = new PaypalProcessor(5);
const stripe = new StripeProcessor(500);

paypal.pay();
stripe.pay();
