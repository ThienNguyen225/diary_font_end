import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auth} from './auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_SERVER = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
  }

  signup(auth: Partial<Auth>): Observable<Auth> {
    return this.http.post<Auth>(`${this.API_SERVER}/api/signup`, auth);
  }

  login(email: string, password: string) {
    const data = {email, password};
    return this.http.post(`${this.API_SERVER}/api/login`, data);
  }
}

