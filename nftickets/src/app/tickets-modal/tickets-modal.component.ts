import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tickets-modal',
  templateUrl: './tickets-modal.component.html',
  styleUrls: [],
})
export class TicketsModalComponent implements OnInit {

  title = "My NFTickets";

  constructor(private modalController: ModalController) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalController.dismiss();
  }

}
