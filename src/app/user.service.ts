import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = 'http://127.0.0.1:8000/api/user';

  constructor(private http: HttpClient) {
  }
  getUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_URL}/1`);
  }

  updateUser(user: Partial<IUser>, id: number): Observable<IUser> {
    return this.http.put<IUser>(`${this.API_URL}/${id}`, user);
  }
}
