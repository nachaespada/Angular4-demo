import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  styles:[`
  	img {
  		margin: auto;
  	}
  `],
	animations: [
		trigger('myanimation',[
			state('smaller', style({
			    transform : 'translateY(100px)'
			})),
			state('larger', style({
			    transform : 'translateY(0px)'
			})),
			transition('smaller <=> larger',animate('300ms ease-in'))
		])
	]
})
export class AnimationsComponent implements OnInit {

	state: string = "smaller";
  animate() {
    this.state = (this.state == 'larger') ? 'smaller' : 'larger';
  }

  constructor() { }

  ngOnInit() {
  }

}
