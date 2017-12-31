import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  inputs: ['childValue'],
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  childValue: string;
}
