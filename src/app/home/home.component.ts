import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/register/app.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  inputs: ['parentValue', 'parentValue1', 'parentValue2', 'parentValue3'],
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})
export class HomeComponent  {

  
  parentValue: string;
  parentValue1:string;
  parentValue2:string;
  parentValue3:string;
  
  firstName : string;
  lastName : string;
  email : string;
  phone: string;
  
  constructor( private _dataservice: DataService)
  {
 
  }
  
  ngOnInit()
  {
  this.firstName = this._dataservice.getFirstName();

  }

}
