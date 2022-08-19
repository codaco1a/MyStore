export class Order {
  customer_name: string;
  customer_address: string;
  credit_card: number | null;
  total_price: number;

  constructor() {
    this.customer_name = '';
    this.customer_address = '';
    this.credit_card = null;
    this.total_price = 0;
  }
}
