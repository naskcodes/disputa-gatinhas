import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalsichaHeader } from './salsicha-header/salsicha-header';
import { SalsichaNavigation } from './salsicha-navigation/salsicha-navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SalsichaHeader, SalsichaNavigation],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})

export class App {
  protected title = 'disputa-gatinhas';
}