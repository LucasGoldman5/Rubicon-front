import { Injectable } from '@angular/core';
import { ProductInterface } from './product-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  totalProduct: { product: ProductInterface; quantity: number }[] = [];

  addToCart(product: ProductInterface, quantity: number) {
    this.totalProduct.push({ product, quantity });
  }

  getCartItems() {
    return this.totalProduct;
  }

  clearCart() {
    this.totalProduct = [];
  }
}
