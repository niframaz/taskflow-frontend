import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-organization',
  imports: [],
  templateUrl: './organization.html',
  styleUrl: './organization.scss',
})
export class Organization {
  @Input()
  organization: any;
}
