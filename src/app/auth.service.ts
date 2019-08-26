import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auth} from './auth';
import {Observable, Subject} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = new Subject<boolean>();
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
  }

  signup(auth: Partial<Auth>): Observable<Auth> {
    return this.http.post<Auth>(`${this.apiUrl}/signup`, auth);
  }

  login(email: string, password: string): Observable<any> {
    const data = {email, password};
    return this.http.post(`${this.apiUrl}/login`, data).pipe(
      map(result => {
        this.isLoggedIn.next(true);
        return result;
      })
    );
  }
  getprofile() {
    return this.http.get(`${this.apiUrl}/admin/user`);
  }
  update(id: number, name: string, email: string): Observable<any> {
    const data = {name, email};
    return this.http.put(`${this.apiUrl}/user`, data);
  }

}

