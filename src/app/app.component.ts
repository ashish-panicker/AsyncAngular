import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeService } from './shared/joke.service';
import { LoggerService } from './shared/logger.service';
import { NgFor } from '@angular/common';
import { HttpRequestLogger } from './shared/HttpLoggerInterceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  joke = ''
  buttonText = 'Next Joke'
  isEnabled = false
  messages: string[] = []

  constructor(
    private jokeService: JokeService,
    private log: LoggerService,
    private interceptor: HttpRequestLogger) {
    this.nextJoke()
    this.getMessages()
  }

  getMessages() {
    this.log.getMessages().subscribe({
      next: message => this.messages.push(message)
    })
  }

  nextJoke() {
    this.jokeService.randomJoke().subscribe({
      next: data => {
        this.joke = data.value
      },
      error: err => {
        this.joke = err.error.message
        console.error(err.error.message)
      },
    })
  }
}
