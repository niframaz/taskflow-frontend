import { Component, inject } from '@angular/core';
import { Auth, User } from '../../core/services/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
private authService = inject(Auth);
private router = inject(Router);

currentUser: User | null = null;

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => this.currentUser = user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
