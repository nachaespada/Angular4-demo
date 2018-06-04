import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ageArray;
  formdata;
  emailid;

  ngOnInit() {
  	this.formdata = new FormGroup({
      emailid: new FormControl("", Validators.compose([
			  Validators.required,
			  Validators.pattern("[^ @]*@[^ @]*")
			])),
      passwd: new FormControl("", this.passwordvalidation),
      age: new FormControl("")
    });

    this.ageArray =  Array.from({length: 90}, (v, k) => k+1);
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length <= 5) {
      return {"passwd" : true};
    }
  }

  changeAge(ev) {
   }

  onSubmit(data) {
	  this.emailid = data.emailid;
	}

}
