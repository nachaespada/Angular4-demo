import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  serviceproperty = "Service Created";
  
  showTodayDate() {
      let ndate = new Date();
      return ndate;
   }
}
