import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeService } from './shared/joke.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  joke = ''
  buttonText = 'Next Joke'
  isEnabled = false

  constructor(private jokeService: JokeService) {
    this.nextJoke()
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
