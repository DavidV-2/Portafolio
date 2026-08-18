import { Routes } from '@angular/router';
import { Home } from './features/home/home.js';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'experience', loadComponent: () => import('./features/experience/experience').then(m => m.Experience) },
  { path: 'projects', loadComponent: () => import('./features/projects/projects').then(m => m.Projects) },
  { path: 'engineering', loadComponent: () => import('./features/engineering/engineering').then(m => m.Engineering) },
  { path: 'skills', loadComponent: () => import('./features/skills/skills').then(m => m.Skills) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact').then(m => m.Contact) },
  { path: '**', redirectTo: '' }
];

