import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_SERVER = 'http://127.0.0.1:8000/api';
  public isLoggedIn: boolean;

  constructor(private http: HttpClient) {
  }

  signup(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.API_SERVER}/signup`, user);
  }


  login(email: string, password: string): Observable<any> {
    const data = {email, password};
    return this.http.post(`${this.API_SERVER}/login`, data).pipe(
      map(result => {
        this.isLoggedIn = true;
        return result;
      })
    );
  }

  getUser(): Observable<any> {
    return this.http.get<any>(`${this.API_SERVER}/admin/user`);
  }

  update(name: string, phone: number, address: string, age: number): Observable<any> {
    const data = {name, phone, address, age};
    return this.http.put(`${this.API_SERVER}/admin/user`, data);
  }

  changePassword(data: Partial<any>): Observable<any> {
    return this.http.put<any>(`${this.API_SERVER}/admin/reset/user`, data);
  }
}
