import { Component, Input } from '@angular/core';
import '../../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    console.log("constructor App Component");
  }

}
