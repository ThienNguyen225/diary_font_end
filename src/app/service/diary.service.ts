import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Diary} from '../interface/diary';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  API_SERVER = 'http://127.0.0.1:8000/api';


  constructor(private http: HttpClient) {
  }

  create(diary: Partial<Diary>): Observable<Diary> {
    console.log(diary);
    return this.http.post<Diary>(`${this.API_SERVER}/user/diary`, diary);
  }
}
