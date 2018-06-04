import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 project';

  // declared array of months.
   months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   isavailable = true;

   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};

   todaydate;
   componentproperty;

   constructor(private myservice: MyserviceService) {

   }

   myClickFunction(ev) {
   	this.isavailable = false;
   }

   ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

    this.myservice.serviceproperty = "component created"; // value is changed.
    this.componentproperty = this.myservice.serviceproperty;
  }
}
