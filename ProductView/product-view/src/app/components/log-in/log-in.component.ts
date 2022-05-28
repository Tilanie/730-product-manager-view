import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserModel } from '../../models/user-model';
import { DataServiceService } from '../../services/data-service.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public user_info = {
      username: "",
      password: ""
  }

  private users: UserModel[] = [];
  constructor(public dataService: DataServiceService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.dataService.getUsers().subscribe((data: UserModel[]) => {
      this.users = data;
    });
  }

  async login(): Promise<void> {
    
    this.spinner.show();
    let valid = await this.validateUser();
    console.log("logging in")
    console.log(valid)
    this.spinner.hide();
    if(valid){
      
      this.router.navigate(['/home'])
    } else{

    }
  }

  async validateUser(): Promise<boolean>{
    let valid = false;
    await this.users.map(data => {
      if(data.username == this.user_info.username && data.password == this.user_info.password){
        localStorage.setItem("username", data.username);
        localStorage.setItem("roles", JSON.stringify(data.roles));
        valid = true;
      }
    })
    return valid;
  }

}
