import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment ';

@Injectable({
  providedIn: 'root',
})
export class OrganizationApi {
  private http = inject(HttpClient);
    private baseUrl = `${environment.apiUrl}/Organizations`;

  getOrganizations() {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
  getOrganization(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
