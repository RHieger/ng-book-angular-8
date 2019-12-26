import { PriceService } from './price.service';

export class Product {
  service: PriceService;
  basePrice: number;

  constructor(basePrice: number) {
    this.service = new PriceService(); // <-- create directly ("hardcoded")
    this.basePrice = basePrice;
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
