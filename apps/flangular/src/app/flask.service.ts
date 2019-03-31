import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlaskService {
  constructor(private http: HttpClient) {}
  getMessage() {
    return <Observable<string>>this.http.get('http://localhost:5000/message');
  }
}
