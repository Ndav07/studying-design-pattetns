import PaypalTransaction from "./PayPal-transaction";
import Transaction from "./Transaction";

export default class PayPalTransactionAdapter implements Transaction {
  trackNumber: string;
  amount: number;
  status: string;
  
  constructor(PaypalTransaction: PaypalTransaction) {
    this.trackNumber = `${PaypalTransaction.id}`
    this.amount = PaypalTransaction.amount
    this.status = this.convertStatus(PaypalTransaction.status)
  }

  convertStatus(status: string): string {
    switch(status) {
      case 'P': 
        return 'waiting_payment'
      case 'S':
        return 'paid'
      case 'F':
        return 'cancelled'
      default:
        return ''
    }
  }
}