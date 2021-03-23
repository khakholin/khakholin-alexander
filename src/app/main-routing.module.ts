import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuard } from './shared/auth/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { GlobalLayoutGuard } from './shared/auth/guards/global-layout.guard';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  {
    path: 'app',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/app/home',
      },
      {
        path: 'home',
        pathMatch: 'full',
        component: HomeComponent,
        canActivate: [GlobalLayoutGuard],
      },
      {
        path: 'coin-keeper',
        loadChildren: () => import('./coin-keeper/coin-keeper.module').then((mod) => mod.CoinKeeperModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/app/home'
  }
];

@NgModule({
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot)  => {
        window.open((route.data as any).externalUrl);
      }
    }
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
