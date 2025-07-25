import { Component } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'lib-test-component',
  standalone: true,
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.scss'
})
export class TestComponentComponent {
  subject = new BehaviorSubject(null)
}
