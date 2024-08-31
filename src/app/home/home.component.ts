import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';
import {
  IFakeUser,
  IFakeUserResponse,
} from '../shared/interfaces/fake-user.interface';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isLoading = false;
  users?: User[];
  fakeUsers$?: Observable<IFakeUserResponse>;
  fakeUsers: IFakeUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
    this.getFakeUsers();
    this.getFakeUsersPromise();
  }

  private getUsers(): void {
    this.isLoading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.isLoading = false;
        this.users = users;
      });
  }

  private getFakeUsers(): void {
    this.fakeUsers$ = this.userService.getFakeUsers();
  }

  private getFakeUsersPromise(): void {
    this.userService
      .getFakeUsersPromise()
      .then((response: IFakeUserResponse) => {
        this.fakeUsers = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
