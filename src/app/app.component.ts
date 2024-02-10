import { Component } from '@angular/core';
import './web-component/wc-button.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public textButton: string = "Click me from angular";
  clickListener() {
    alert( 'Hola desde un WC de Angular' );
  }
}
