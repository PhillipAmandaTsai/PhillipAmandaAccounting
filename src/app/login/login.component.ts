import { Component, OnInit } from '@angular/core';

import { MetaDataService } from "../service/meta-data.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* variables */
  login_inputs = [];

  constructor(
    private metaDataService:MetaDataService
  ){}

  ngOnInit(){
    this.metaDataService.login_inputs.subscribe(response=>{
      this.login_inputs = response;
      this.login_inputs.sort(function(){return Math.random() -0.5});  //fake random
    });
  }

}
