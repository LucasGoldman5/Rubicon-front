import { Component, Input} from '@angular/core';
import { ProductInterface } from '../../product-interface';
import { NgOptimizedImage,CommonModule, } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { CartService } from '../../service-cart.service';

@Component({
  selector: 'app-productsList',
  standalone: true,
  imports:[ NgOptimizedImage,CommonModule,FormsModule ],
  templateUrl: './products.list.component.html',
  styleUrls: ['./products.list.component.css']
})


export class ProductsListComponent{
  @Input() product! : ProductInterface
  quantity: number = 1;

  constructor(private cartService: CartService) {}

  decreaseQuantity() {
    this.quantity --
  }

  increaseQuantity() {
    this.quantity ++
  }

  onInputChange(event: Event) {

    const newValue = (event.target as HTMLInputElement).value;
    const parsedValue = parseFloat(newValue);

    if (isNaN(Number(newValue))) {
      alert("Debe introducir un número");
    } else {
      this.quantity = parsedValue;
    }
    
  }

  addToCart(product:ProductInterface,quantity:number) {
    
    this.cartService.addToCart(product, quantity);
    this.getCartItems()
  }

  getCartItems() {
    console.log(this.cartService.getCartItems());
  }
}
