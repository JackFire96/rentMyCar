import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'car-list',
    loadComponent: () => import('./car-list/car-list.page').then( m => m.CarListPage)
  },
  {
    path: 'add-car',
    loadComponent: () => import('./add-car/add-car.page').then( m => m.AddCarPage)
  },
  {
    path: 'car-details',
    loadComponent: () => import('./car-details/car-details.page').then( m => m.CarDetailsPage)
  },
  {
    path: 'car-details',
    loadComponent: () => import('./car-details/car-details.page').then( m => m.CarDetailsPage)
  },
];
