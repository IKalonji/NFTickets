import { Injectable } from "@angular/core";
import { TicketCard } from "src/models/ticket-card.model";

@Injectable({
    providedIn: 'root',
   })
export class UserTicketService {

    userTickets: TicketCard[];

    constructor(){
        this.userTickets = [];
    }

    getUserTickets(){
        return this.userTickets;
    }

    addUserTicket(ticket: TicketCard){
        this.userTickets.push(ticket);
        console.log(this.userTickets)
    }

    removeUserTicket(ticket: TicketCard){
        let index = this.userTickets.indexOf(ticket)
        this.userTickets.splice(index, 1)
    }
}