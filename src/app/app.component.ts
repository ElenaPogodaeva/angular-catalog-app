import { Component } from '@angular/core';
import { responseMock } from './products/models/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-catalog-app';

  products = responseMock;
}
