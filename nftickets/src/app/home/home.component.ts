import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NFTStorage, File } from 'nft.storage'
import { pack } from 'ipfs-car/pack'
import { environment } from 'src/environments/environment';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { TicketsModalComponent } from '../tickets-modal/tickets-modal.component';
import { Moralis } from 'moralis';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @Input() userAddress: any

  title = "rayblue.wallet";
  metadata: any;

  constructor(private http: HttpClient, private modalController: ModalController, private actionSheetController: ActionSheetController, private alert: AlertController, private router: Router) { }

  ngOnInit(): void {
  }

  async ticketSelected(provider:string, description:string){

    const actionSheet = await this.actionSheetController.create({
      header: 'Select ticket frequency',
      buttons: [{
        text: 'Single ride',
        icon: 'pricetag-outline',
        data: 10,
        handler: () => {
          console.log('Single clicked');
          this.uploadToIPFS(provider, description);
        }
      }, 
      {
        text: 'Multi ride (2-6)',
        icon: 'pricetags-outline',
        data: 'Data value',
        handler: () => {
          console.log('Multi clicked');
          this.uploadToIPFS(provider, description);
        }
      }, 
      {
        text: 'Weekly',
        icon: 'card-outline',
        data: 'Data value',
        handler: () => {
          console.log('Weekly clicked');
          this.uploadToIPFS(provider, description);
        }
      },
      {
        text: 'Monthly',
        icon: 'wallet-outline',
        data: 'Data value',
        handler: () => {
          console.log('Monthly clicked');
          this.uploadToIPFS(provider, description);
        }
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        data: 'Data value',
        handler: () => {
          console.log('Cancel clicked');
          this.uploadToIPFS(provider, description);
        }
      }]
    });

    await actionSheet.present();



  }

  async ticketsModal(){
    const modal = await this.modalController.create({
      component: TicketsModalComponent
    });
    await modal.present()
  }

  async uploadToIPFS(provider:string, description:string){
    const client = new NFTStorage({ token: environment.nftStorage })
    this.metadata = await client.store({
      name: provider,
      description: description,
      image: new File([/* data */], 'ticketQR.jpg', { type: 'image/jpg' })
    })
    console.log(this.metadata.url);
    this.mintNFT(provider, description, this.metadata.url)
    
  }

  mintNFT(name:string, description:string, url:string, address = "0x5590882e54bB029BA24d54908CD225A1A27CB398"){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: environment.nftport
      })
      }

    const body = {
      "chain": "polygon",
      "name": name,
      "description": description,
      "file_url": url,
      "mint_to_address": address
    }

      this.http.post("https://api.nftport.xyz/v0/mints/easy/urls", body, httpOptions).subscribe(data => {
        console.log(data)
        this.showAlert()
      })
  }

  async showAlert(){
    const alerted = await this.alert.create(
      {
        header: "Success",
        subHeader: "Ticket successfully minted",
        buttons:[
          "OK"
        ]
      }
    )

    await alerted.present();
  }
  
  logout() {
    Moralis.User.logOut()
      .then((loggedOutUser) => console.info('logout', loggedOutUser))
      // Set user to undefined
      .then(() => { this.router.navigateByUrl("")})
      // Disconnect Web3 wallet
      .then(() => Moralis.Web3.cleanup())
      .catch((e) => console.error('Moralis logout error:', e));
  }
}
