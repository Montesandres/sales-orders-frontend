import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  options = [
    {
      name: 'Opcion 1',
      url: 'asd',
      description: 'loreasdskjssjkadsdhsakdhsakdhksajdhsakjhdkasd',
      icon: 'pi-users',
    },
    {
      name: 'Opcion 2',
      url: 'asd',
      description: 'loreasdskjssjkadsdhsakdhsakdhksajdhsakjhdkasd',
      icon: 'pi-users',
    }
  ]
}
