//our root app component
import {Component, Attribute} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'date',
  template: `
      <input [ngModel]="value" (keyup)=(onChange($event)) placeholder="dd.mm.yyyy"
      maxlength="10" pattern="">
    `
})

export class DateComponent{
  value: string = "1";
  pattern = "\\d\\d\\.\\d\\d\\.\\d\\d\\d\\d";

  public onChange(event){
    var r = new RegExp(this.pattern.substring(0,event.target.value.length*2));
    if(r.test(event.target.value)){
      this.value = event.target.value;
    }else{
      event.target.value = this.value;
    }
    event.preventDefault(true);
  }
}
