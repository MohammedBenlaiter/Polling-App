import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Poll {
  private baseUrl = 'http://localhost:8080/api/polls';
  constructor(private http: HttpClient) {}

  createPoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>(this.baseUrl + '/create', poll);
  }

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.baseUrl + '/getAllPolls');
  }

  vote(pollId: number, optionIndex: number): Observable<void> {
    return this.http.post<void>(this.baseUrl + '/vote', {
      pollId,
      optionIndex,
    });
  }
}
