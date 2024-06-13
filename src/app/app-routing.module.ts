import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeatilComponent } from './deatil/deatil.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'detail/:id',component:DeatilComponent},
  {path:'log',component:LoginComponent},
  {path:'reg',component:RegComponent},
  {path:'wish',component:WhishlistComponent},
  {path:'cart',component:CartComponent},
  {path:'check',component:CheckoutComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
