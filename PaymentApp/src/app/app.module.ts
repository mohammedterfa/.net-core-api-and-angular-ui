import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentDetailService } from './shared/payment-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PaymentDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
