import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationApi } from '../../../core/services/organization-api';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organization',
  imports: [CommonModule],
  templateUrl: './organization.html',
  styleUrl: './organization.scss',
})
export class Organization implements OnInit {
  private route = inject(ActivatedRoute);
  private organizationApi = inject(OrganizationApi);

  $organization$!: Observable<any>;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.$organization$ = this.organizationApi.getOrganization(Number(id));
  }
}