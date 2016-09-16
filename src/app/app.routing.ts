import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: Home,
    data: {
      title: 'Heroes List'
    }
  },
  { path: ':code', component: Home },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
