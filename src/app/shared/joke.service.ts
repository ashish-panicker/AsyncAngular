import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from './Joke';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  url = 'https://api.chucknorris.io/jokes/random2'

  constructor(private http: HttpClient) { }

  randomJoke(): Observable<Joke> {      
    return this.http.get<Joke>(this.url)
  }
  /**
   * HTTP methods
   * GET, POST, PUT, DELETE, OPTIONS, HEAD, TRACE
   */

}
