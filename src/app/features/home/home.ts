import { Component } from '@angular/core';
import { OrganizationList } from '../organizations/organization-list/organization-list';

@Component({
  selector: 'app-home',
  imports: [OrganizationList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
}
