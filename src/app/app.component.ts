import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private routes: Router) { }
  selectMenu(select) {
    if (select === 'Reactive') {
      this.routes.navigateByUrl('/reactiveform');
    } else {
      this.routes.navigateByUrl('/templateform');
    }
  }
}
