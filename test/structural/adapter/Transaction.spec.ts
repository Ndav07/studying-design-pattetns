// CONVERTER a interface de uma classe em outra interface, esperada pelos cliente
// O Adpter permite que classes com interfaces incompatíveis trabalhes em conjunto

import PayPalTransaction from "../../../src/structural/adpter/PayPalTransaction";
import PayPalTransactionAdapter from "../../../src/structural/adpter/PayPalTransactionAdpter";
import StripeTransaction from "../../../src/structural/adpter/StripeTransaction";
import StripeTransactionAdapter from "../../../src/structural/adpter/StripeTransactionAdpter";

describe("Adapter, test transaction", () => {
  it("should create a Stripe transaction", () => {
    const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2);
    expect(stripeTransaction.code).toBe("AHN786AB8");
  });

  it("should create a PayPal transaction", () => {
    const paypalTransaction = new PayPalTransaction(8756464, 1000, "F");
    expect(paypalTransaction.id).toBe(8756464);
  });

  it("should create transaction from the Stripe", () => {
    const stripeTransaction = new StripeTransaction("AHN786AB8", 1000, 2);
    const transaction = new StripeTransactionAdapter(stripeTransaction);
    expect(transaction.trackNumber).toBe("AHN786AB8");
    expect(transaction.amount).toBe(1000);
    expect(transaction.status).toBe("paid");
  });

  it("should create transaction from the PayPal", () => {
    const paypalTransaction = new PayPalTransaction(435646478, 1000, "P");
    const transaction = new PayPalTransactionAdapter(paypalTransaction);
    expect(transaction.trackNumber).toBe("435646478");
    expect(transaction.amount).toBe(1000);
    expect(transaction.status).toBe("waiting_payment");
  });
});
