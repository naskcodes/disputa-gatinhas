import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Salsicha } from '../salsicha';

@Component({
  selector: 'app-salsicha-news',
  imports: [CardModule],
  templateUrl: './salsicha-news.html',
  styleUrl: './salsicha-news.css',
})

export class SalsichaNews {
  constructor(private salsicha: Salsicha){ 
    // this.salsicha.getShows().subscribe((res: any) => {
    //   alert(JSON.stringify(res));
    // });
  }  
}