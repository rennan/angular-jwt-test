﻿import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loading = false;
  users?: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.getAll()
      .pipe(first())
      .subscribe((users) => {
        this.loading = false;
        this.users = users;
      });
  }
}
