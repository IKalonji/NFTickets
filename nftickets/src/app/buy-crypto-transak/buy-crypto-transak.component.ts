import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-buy-crypto-transak',
  templateUrl: './buy-crypto-transak.component.html',
  styles: [
  ]
})
export class BuyCryptoTransakComponent implements OnInit {

  transakKey:any;
  transakEndpoint:any;

  constructor(private modal:ModalController,
              private sanitizer: DomSanitizer) {
    this.transakKey = environment.transak;
    let url = `https://staging-global.transak.com/?apiKey=a57393b5-ff92-489d-a4d6-d8e09a26ace7&redirectURL=https://transak.com&cryptoCurrencyList=CELO&defaultCryptoCurrency=CELO&walletAddress=0x8c5233fcd924a336e35249fea32090a707c0033b&disableWalletAddressForm=true&exchangeScreenTitle=NFTickets&isFeeCalculationHidden=true`
    this.transakEndpoint = sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
  }

  back() {
    this.modal.dismiss();
  }

}
