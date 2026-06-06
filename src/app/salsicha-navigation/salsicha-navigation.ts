import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-salsicha-navigation',
  imports: [RouterLink],
  templateUrl: './salsicha-navigation.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './salsicha-navigation.css',
})

export class SalsichaNavigation {

}
