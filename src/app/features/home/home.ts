import { Component, inject } from '@angular/core';
import { Organization } from '../../core/services/organization';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private organizationService = inject(Organization);
  organizations: any[] = [];

  organizations$ = this.organizationService.getOrganizations();
}
