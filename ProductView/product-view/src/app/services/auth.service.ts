import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getAuthStatus(): boolean{
    let user = localStorage.getItem("username");
    if(user != null && user != undefined && user != ""){
      return true;
    }
    return false;
  }
}
