import { Routes } from '@angular/router';
import { SalsichaNews } from './salsicha-news/salsicha-news';

export const routes: Routes = [
    { path: '**', component: SalsichaNews }
];