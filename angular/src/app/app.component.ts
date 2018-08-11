import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'III MG';
  Manipulate(sidenav) {
    if (sidenav.opened) {
      sidenav.close();
    }
    else {
      sidenav.open();
    }
  }
}
