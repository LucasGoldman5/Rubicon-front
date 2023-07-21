import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ViewCartComponent } from './view-cart/view-cart.component';

@Component({
  selector: 'app-buttons-cart',
  standalone: true,
  imports: [ ViewCartComponent,CommonModule ],
  templateUrl: './cart-confirmation.component.html',
  styleUrls: ['./cart-confirmation.component.css']
})
export class ButtonsCartComponent {

  cartModalOpen: boolean = false;

  viewCart(){
    this.cartModalOpen = true;
  }
}
