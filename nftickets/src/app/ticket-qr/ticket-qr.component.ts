import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TicketCard } from 'src/models/ticket-card.model';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-ticket-qr',
  templateUrl: './ticket-qr.component.html',
  styles: [
  ]
})
export class TicketQrComponent implements OnInit {

  @Input() ticket:TicketCard

  qrEncodedData:any;

  // We can have Canvas/Img/Url as elementType
  elementType = NgxQrcodeElementTypes.URL;
  
  // We can have High/Low/Medium/Quartile
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  
  // Need to specify the valid account address
  value : string = "";

  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
    this.value = `${this.ticket.event} ${this.ticket.city} ${this.ticket.date} ${this.ticket.price} ${this.ticket.image} ${this.ticket.txID}`
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}
