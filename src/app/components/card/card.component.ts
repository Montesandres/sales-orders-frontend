import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  route = inject(Router);

  @Input() feature: any = {
    name: '',
    url: '',
    description: '',
    icon: 'pi-users',
  };

  navigateToLink(url: string) {
    document.getElementById('pageView')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    this.route.navigate([url]);
  }
}
