import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
   })
export class MinterService {

    endPoint: string = "https://api-eu1.tatum.io/v3/nft/mint";
    headers: any;
    body: any;

    constructor(private http:HttpClient){
        this.headers = new HttpHeaders()
                        .set(
                            "x-api-key", environment.tatumKey
                        )
                        .set(
                            "Content-Type", "application/json"
                        )
        this.body = {
            "chain": "CELO",
            "to": "0x8cb76aed9c5e336ef961265c6079c14e9cd3d2ea",
            "url": "https://nftickets.mock.com",
            "feeCurrency": "CELO"
        } 
    }

    nftMintExpress(){
        return this.http.post(this.endPoint, this.body, {headers:this.headers})
    }


}

