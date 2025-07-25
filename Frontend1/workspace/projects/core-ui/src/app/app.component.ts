import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentsComponent} from '@qpx/components';
import {BehaviorSubject, tap} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsComponent],
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

