import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public authToken: boolean = null;

  private pw = "123abc";

  constructor() { }

  authenticate(password: string){
    
    if (password == this.pw)
    {
      this.authToken = true;
    }

    else{
      this.authToken = false;
    }

    
  }

  resetToken(){
    this.authToken = null;
  }

  ngOnInit() {
    
  }

}
