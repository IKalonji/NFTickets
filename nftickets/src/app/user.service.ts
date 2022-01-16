import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  user: string | undefined;
  
  constructor() { }

  setUser(user:string){
    this.user  = user;
  }

  getUser(user:string){
    return this.user;
  }
}
