import {Component, ContentChildren, QueryList} from '@angular/core'

@Component({
  selector: 'duration',
  template: `
  <div>
    <input type="text" [(ngModel)]="duration"/>
    {{ duration | duration}}
    </div>
  `
})

export class DurationComponent {
  public duration: number;

}
