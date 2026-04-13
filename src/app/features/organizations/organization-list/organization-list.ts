import { Component, inject } from '@angular/core';
import { OrganizationApi } from '../../../core/services/organization-api';
import { CommonModule } from '@angular/common';
import { Organization } from '../organization/organization';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-organization-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './organization-list.html',
  styleUrl: './organization-list.scss',
})
export class OrganizationList {
  private organizationService = inject(OrganizationApi);
  private router = inject(Router);
  organizations$ = this.organizationService.getOrganizations();

  // openOrg(id: any) {
  //   this.router.navigate(['/organizations', id]);
  // }
}
