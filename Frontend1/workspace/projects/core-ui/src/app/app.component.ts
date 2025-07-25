import { Component } from '@angular/core';
import {ComponentsComponent, TestComponentComponent} from '@qpx/components';
import {BehaviorSubject, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentsComponent, TestComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'core-ui';

  subject = new BehaviorSubject(null);

  constructor() {
    this.subject.pipe(tap()).subscribe()
  }
}
