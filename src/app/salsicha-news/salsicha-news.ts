import { Component, Signal, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SHOWS } from '../../assets/shows';

@Component({
  selector: 'app-salsicha-news',
  imports: [CardModule],
  templateUrl: './salsicha-news.html',
  styleUrl: './salsicha-news.css',
})

export class SalsichaNews {
  shows: Signal<any> = signal(SHOWS);
}