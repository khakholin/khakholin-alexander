import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinKeeperComponent } from './components/coin-keeper/coin-keeper.component';
import { GlobalLayoutGuard } from '@app/shared/auth/guards/global-layout.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CoinKeeperComponent,
    canActivate: [GlobalLayoutGuard],
  },
  {
    path: '**',
    redirectTo: '/app/coin-keeper'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinKeeperRoutingModule { }
