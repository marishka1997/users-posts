import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../core/models/user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
