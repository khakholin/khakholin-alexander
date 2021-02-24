import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingWrapperComponent } from './landing/components/landing-wrapper/landing-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: LandingWrapperComponent,
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
