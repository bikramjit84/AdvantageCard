import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './components/login/login.component';
import { CardPaymentComponent } from './components/card-payment/card-payment.component'; 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentResultComponent } from './components/payment-result/payment-result.component';
import { LocalStorageModule } from 'angular-2-local-storage';
 
export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardPaymentComponent,
    PaymentResultComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LocalStorageModule.forRoot({
      prefix: 'bank-ui',
      storageType: 'localStorage'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, 
        useFactory: TranslationLoaderFactory, 
        deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
