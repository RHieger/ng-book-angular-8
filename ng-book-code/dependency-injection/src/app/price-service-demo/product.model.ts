import { IPriceService } from './price-service.interface';

export class Product {
  service: IPriceService;
  basePrice: number;

  constructor(service: IPriceService, basePrice: number) {
    this.service = service; // <-- passed in as an argument!
    this.basePrice = basePrice;
  }

  totalPrice(state: string) {
    return this.service.calculateTotalPrice(this.basePrice, state);
  }
}
