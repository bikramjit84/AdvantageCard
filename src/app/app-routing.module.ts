import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CardPaymentComponent } from './components/card-payment/card-payment.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PaymentResultComponent } from './components/payment-result/payment-result.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  } ,
  {
    path: 'selectCard',
    component: CardPaymentComponent,
    canActivate: [ AuthGuardService ]
  } ,
  {
    path: 'paymentResult',
    component: PaymentResultComponent 
  } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
