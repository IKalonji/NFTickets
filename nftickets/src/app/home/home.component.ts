import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { HomeCard } from 'src/models/home-card.model';
import { EventTicket } from 'src/models/event-card.model';
import { EntertainmentTicket } from 'src/models/entertainment-card.model';
import { LeisureTicket } from 'src/models/hospitality-card.model';
import { TransportTicket } from 'src/models/transport-card.model';
import { FormControl } from '@angular/forms';
import { TicketsModalComponent } from '../tickets-modal/tickets-modal.component';
import { TicketCard } from 'src/models/ticket-card.model';
import { MyTicketsComponent } from '../my-tickets/my-tickets.component';
import { environment } from 'src/environments/environment';
import { BuyCryptoTransakComponent } from '../buy-crypto-transak/buy-crypto-transak.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  title:string="NFTickets"

  public searchField: FormControl;

  slideOptions = {
    slidesPerView: 2.5,
    spaceBetween: -1,
    loop:true,
  }

  cards: HomeCard[] = [
    {
      category: "Events & Functions",
      tickets: EventTicket
    },
    {
      category: "Entertainment",
      tickets: EntertainmentTicket
    },
    {
      category: "Travel & Leisure",
      tickets: LeisureTicket
    },
    {
      category: "Transport",
      tickets: TransportTicket
    },
  ]

  constructor( 
              private modalController: ModalController, 
              private alert: AlertController,
              ) {
                this.searchField = new FormControl('');
               }

  ngOnInit(): void {}

  async onClick(ticket: TicketCard, category: string){
    let modal = await this.modalController.create({
      component: TicketsModalComponent,
      componentProps: {
        ticket: ticket,
        category: category
      }
    })

    await modal.present();
  }
  
  async myTickets(){
    let modal = await this.modalController.create({
      component: MyTicketsComponent,
      }
    )

    await modal.present();
  }

  async myWallet(){
    let walletAlert = await this.alert.create(
      {
        header: "Connected Wallet Address",
        subHeader: environment.wallet,
        buttons: ["OK", {
          text: 'Buy Crypto',
          handler: async () => {
            let modal = await this.modalController.create({
              component: BuyCryptoTransakComponent,
              })

            await modal.present()
          }
        }
        ]
      }
    );

    await walletAlert.present();
  }
}


