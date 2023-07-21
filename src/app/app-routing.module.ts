import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
 {
  path:`products`,
  title:`Productos`,
  component:ProductsComponent
 },

 {
  path:`login`,
  title:`Login`,
  component:LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
