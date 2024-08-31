import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '../models/user.model';
import { firstValueFrom, Observable } from 'rxjs';
import { IFakeUserResponse } from '../interfaces/fake-user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getFakeUsers(): Observable<IFakeUserResponse> {
    return this.http.get<IFakeUserResponse>(`${environment.fakeApiUrl}/users`);
  }

  getFakeUsersPromise(): Promise<IFakeUserResponse> {
    return firstValueFrom(this.http.get<IFakeUserResponse>(`${environment.fakeApiUrl}/users`));
  }
}
