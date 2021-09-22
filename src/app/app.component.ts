import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'w9lab';
  section = 1;
  changeSection(sectionId:number) {
    this.section = sectionId;
  }
}
