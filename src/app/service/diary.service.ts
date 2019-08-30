import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  apiUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  addDiary(title: string, contents: string): Observable<any> {
    const data = {title, contents};
    return this.http.post(`${this.apiUrl}/user/diary`, data);
  }

}
