import { NgModule } from '@angular/core';
import { LandingAboutComponent } from '@app/landing/components/landing-about/landing-about.component';
import { LandingContactsComponent } from '@app/landing/components/landing-contacts/landing-contacts.component';
import { LandingLogoComponent } from '@app/landing/components/landing-logo/landing-logo.component';
import { LandingTimelineComponent } from '@app/landing/components/landing-timeline/landing-timeline.component';
import { LandingWrapperComponent } from '@app/landing/components/landing-wrapper/landing-wrapper.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LandingAboutComponent,
        LandingContactsComponent,
        LandingLogoComponent,
        LandingTimelineComponent,
        LandingWrapperComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    bootstrap: []
})
export class LandingModule { }
