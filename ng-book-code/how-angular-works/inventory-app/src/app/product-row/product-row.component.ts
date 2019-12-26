import {
  Component,
  Input,
  HostBinding
} from '@angular/core';
import { Product } from '../product.model';

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
})
export class ProductRowComponent {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
