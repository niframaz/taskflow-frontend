import { Component, inject } from '@angular/core';
import { OrganizationApi } from '../../../core/services/organization-api';
import { CommonModule } from '@angular/common';
import { Organization } from '../organization/organization';

@Component({
  selector: 'app-organization-list',
  imports: [CommonModule,Organization],
  templateUrl: './organization-list.html',
  styleUrl: './organization-list.scss',
})
export class OrganizationList {
  private organizationService = inject(OrganizationApi);
  organizations$ = this.organizationService.getOrganizations();
}
