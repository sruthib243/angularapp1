import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

private firstName: string;
lastName : string;
email : string;
phone : string;

constructor(){

}


getFirstName()
{

return this.firstName;
}

setFirstName(firstName : string)
{
this.firstName = firstName;
}








    }



