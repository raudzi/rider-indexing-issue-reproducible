import { Component } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'lib-components',
  standalone: true,
  imports: [],
  template: `
    <p>
      components works!
    </p>
  `,
  styles: ``
})
export class ComponentsComponent {
subject = new BehaviorSubject(null)
}
