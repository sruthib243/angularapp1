import { Component} from '@angular/core';
import { DataService } from './app.service';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';



@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DataService]
})
export class RegisterComponent {

myForm : FormGroup;

constructor(fb: FormBuilder , private router: Router,private _dataService: DataService){
this.myForm= fb.group({
        'firstName' : [''],
        'lastName' : [''],
        'email' : [''],
        'phone' : ['']
    });
 }

 
 onClick(user){
 this._dataService.setFirstName(user.firstName);
 console.log('this is logger');
 this.router.navigate(['/home']);
 }

}
