import { NgModule } from '@angular/core';
import { LandingLogoComponent } from '@app/landing/components/landing-logo/landing-logo.component';
import { LandingWrapperComponent } from '@app/landing/components/landing-wrapper/landing-wrapper.component';

@NgModule({
    declarations: [
        LandingLogoComponent,
        LandingWrapperComponent,
    ],
    imports: [],
    providers: [],
    bootstrap: []
})
export class LandingModule { }
