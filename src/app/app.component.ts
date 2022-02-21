import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soundboard';

  sounds: { name: string, path: string }[] = [
    { "name": "Paul eugh", "path": "../../assets/eugh.m4a"},
    { "name": "Payton meow", "path": "../../assets/meow.m4a"}
  ]
}