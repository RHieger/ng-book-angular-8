import {
  Component,
  Input
} from '@angular/core';

/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
@Component({
  selector: 'price-display',
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
export class PriceDisplayComponent {
  @Input() price: number;
}
