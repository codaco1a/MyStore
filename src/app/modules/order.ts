export class Order {
  customer_name: string;
  customer_address: string;
  credit_card: number | null;

  constructor() {
    this.customer_name = '';
    this.customer_address = '';
    this.credit_card = null;
  }
}
