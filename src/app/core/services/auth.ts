import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);
  private baseUrl = 'https://localhost:7059/api/User';

  login(data: any){
    return this.http.post(`${this.baseUrl}/login`,data);
  }

    register(data: any){
    return this.http.post(`${this.baseUrl}/register`,data);
  }
}
