import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './home/home.component';
import { HomeStatic } from "./home-static/home-static.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeStatic,
    data: {
      title: 'McLed'
    }
  },
  { path: ':code', component: Home },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
