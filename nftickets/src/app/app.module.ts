import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UserComponent } from './user.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketsModalComponent } from './tickets-modal/tickets-modal.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { TicketQrComponent } from './ticket-qr/ticket-qr.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BuyCryptoTransakComponent } from './buy-crypto-transak/buy-crypto-transak.component';


@NgModule({
  declarations: [
    AppComponent, HomeComponent, TicketsModalComponent, MyTicketsComponent, TicketQrComponent, BuyCryptoTransakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule
  ],
  providers: [BarcodeScanner,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
