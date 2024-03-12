import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messages: string[] = ['Message 1', 'Message 2']

  getMessages(): Observable<string> {
    return from(this.messages)
  }

  logMessage(message: string) {
    this.messages.push(message)
  }
}
