import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  inputs: ['parentValue', 'parentValue1', 'parentValue2', 'parentValue3'],
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  
  parentValue: string;
  parentValue1:string;
  parentValue2:string;
  parentValue3:string;

}
