import { Routes } from '@angular/router';
import { SalsichaShows } from './salsicha-shows/salsicha-shows';

export const routes: Routes = [
    { path: '**', component: SalsichaShows }
];