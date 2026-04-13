import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization',
  imports: [],
  templateUrl: './organization.html',
  styleUrl: './organization.scss',
})
export class Organization {
  private route = inject(ActivatedRoute);
  // @Input()
  // organization: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // call API using id
  }
}
