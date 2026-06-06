import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalsichaHeader } from './salsicha-header/salsicha-header';
import { SalsichaNavigation } from './salsicha-navigation/salsicha-navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SalsichaHeader, SalsichaNavigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'disputa-gatinhas';
}