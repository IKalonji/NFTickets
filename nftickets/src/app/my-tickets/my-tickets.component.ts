import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TicketCard } from 'src/models/ticket-card.model';
import { UserTicketService } from 'src/services/user-tickets.service';
import { TicketQrComponent } from '../ticket-qr/ticket-qr.component';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styles: [
  ]
})
export class MyTicketsComponent implements OnInit {

  myTickets: TicketCard[]

  constructor(private modalController: ModalController,
    private userTicketService: UserTicketService) {
     }

  ngOnInit(): void {
    this.myTickets = this.userTicketService.getUserTickets()
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

  async showTicket(ticket:TicketCard){
    let modal = await this.modalController.create({
      component: TicketQrComponent,
      componentProps: {ticket:ticket}
      }
    )

    await modal.present();
  }

}
