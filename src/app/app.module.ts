import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './new-cmp/app.sqrt';
import { MyserviceService } from './myservice.service';
import { FormComponent } from './form/form.component';
import { AnimationsComponent } from './animations/animations.component';

@NgModule({
  declarations: [
  	SqrtPipe,
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    FormComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
		RouterModule.forRoot([
		 {
		    path: 'new-cmp',
		    component: NewCmpComponent
		 },
     {
        path: 'form',
        component: FormComponent
     },
     {
        path: 'animate',
        component: AnimationsComponent
     }
		])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]  //for bootstrap the AppComponent the main app component is given.
})
export class AppModule { }
