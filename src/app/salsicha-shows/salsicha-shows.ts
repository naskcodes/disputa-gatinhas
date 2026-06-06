import { Component, Signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import data from '../../assets/data.json'

@Component({
  selector: 'app-salsicha-shows',
  imports: [CardModule],
  templateUrl: './salsicha-shows.html',
  styleUrl: './salsicha-shows.css',
})

export class SalsichaShows {
  data = <any>(data);
}