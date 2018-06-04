import { Component, OnInit } from '@angular/core'; // here angular/core is imported .
import { MyserviceService } from './../myservice.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  // this is a declarator which starts with @ sign. The component word marked in bold needs to be the same.
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
	newcomponent = "Entered in new component created";

  todaydate;
  newcomponentproperty;
  httpdata;
  filteredHttpdata;

  constructor(private myservice: MyserviceService, private http: Http) {}

  // ngOnInit is called by default when the class is executed.
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

    this.newcomponentproperty = this.myservice.serviceproperty;

    //this.http.get("http://jsonplaceholder.typicode.com/users?id=" + 10)
    this.http.get("http://jsonplaceholder.typicode.com/users") // return observable
        .subscribe(
          (data) => {this.displaydata(data);}
        )
  }

  displaydata(data) {
    this.httpdata = this.filteredHttpdata = data.json();
  }

  // TODO. This is just an example. Filter the current httpdata array.
  changeIndex(ev) {
    let value = ev.currentTarget.value.toLowerCase();
    this.filteredHttpdata = this.httpdata.filter(data => data.name.toLowerCase().indexOf(value) >= 0);
  }
}
