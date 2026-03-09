import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { PseudocodeTheorie } from './features/pseudocode/pages/pseudocode-theorie/pseudocode-theorie';
import { PseudocodeExercice } from './features/pseudocode/pages/pseudocode-exercice/pseudocode-exercice';

export const routes: Routes = [
  {
    component: Home,
    path:'home',
    title: 'ma homepage',
  },
  {
    component: PseudocodeTheorie,
    path:'pseudocode',
    title: 'pseudocode',
  },
  {
    component: PseudocodeExercice,
    path:'pseudocode-exercice',
    title: 'pseudocode-exercice',
  },

  // Redirection
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },

  // Quand l'uri ne matche avec aucune route
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  }
];
