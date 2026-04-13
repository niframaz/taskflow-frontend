import { Component } from '@angular/core';
import { OrganizationList } from '../organizations/organization-list/organization-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [OrganizationList, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
}
