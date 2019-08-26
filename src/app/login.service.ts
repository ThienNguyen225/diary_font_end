import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn = new Subject<boolean>();
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
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
}
