import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Diary} from '../../interface/diary.interface';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  API_SERVER = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
  }

  getAllDiary(): Observable<any> {
    return this.http.get(`${this.API_SERVER}/user/diary`);
  }

  create(title: string, contents: string): Observable<any> {
    const diary = {title, contents};
    return this.http.post(`${this.API_SERVER}/user/diary`, diary);
  }

  update(tilte: string, contents: string, id: number): Observable<any> {
    const diary = {tilte, contents};
    console.log(diary);
    return this.http.put(`${this.API_SERVER}/user/diary/${id}`, diary);
  }

  getDiary(id: number): Observable<any> {
    return this.http.get(`${this.API_SERVER}/user/diary/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API_SERVER}/user/diary/${id}`);
  }
}
