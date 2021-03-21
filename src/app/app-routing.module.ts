import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinKeeperComponent } from './coin-keeper/coin-keeper.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { LandingWrapperComponent } from './landing/components/landing-wrapper/landing-wrapper.component';
import { SignInComponent } from './login/components/sign-in/sign-in.component';


const routes: Routes = [
  {
    path: '',
    component: LandingWrapperComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'coin-keeper',
    component: CoinKeeperComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
