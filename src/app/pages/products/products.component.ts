import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductsListComponent } from './components/productsList/products.list.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonsCartComponent } from './components/viewAndConfirmCart/cart-confirmation.component';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from './product-interface';


@Component({
  selector: 'app-products',
  standalone: true,
  imports:[ TitleComponent,ProductsListComponent,CommonModule,ButtonsCartComponent ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = "Lista de Productos";
  http = inject(HttpClient);
  products: ProductInterface[] = []

  
  productExist() {
    if(this.products.length >= 1){
      return true
    }else{
      return false
    }
  }

  ngOnInit(){
    this.http.get<ProductInterface[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      this.products = data;
    })
  }
  
}
