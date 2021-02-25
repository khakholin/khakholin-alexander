import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-landing-wrapper',
    templateUrl: './landing-wrapper.component.html',
    styleUrls: ['./landing-wrapper.component.scss']
})
export class LandingWrapperComponent {
    @ViewChild('landingAbout')
    landingAboutEl: ElementRef;
    @ViewChild('landingTimeline')
    landingTimelineEl: ElementRef;
    @ViewChild('landingContacts')
    landingContactsEl: ElementRef;

    isNavigationShown = false;

    goToAbout(): void {
        this.landingAboutEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.hideNavigation();
    }

    goToTimeline(): void {
        this.landingTimelineEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.hideNavigation();
    }

    goToContacts(): void {
        this.landingContactsEl.nativeElement.scrollIntoView({ behavior: 'smooth' });
        this.hideNavigation();
    }

    onBurgerClick(): void {
        this.isNavigationShown ? this.hideNavigation() : this.showNavigation();
    }

    showNavigation(): void {
        this.isNavigationShown = true;
        document.querySelectorAll('body')[0].style.overflow = 'hidden';
        (document.querySelectorAll('.burger')[0] as HTMLElement).style.borderColor = 'white';
    }

    hideNavigation(): void {
        this.isNavigationShown = false;
        document.querySelectorAll('body')[0].style.overflow = 'visible';
        (document.querySelectorAll('.burger')[0] as HTMLElement).style.borderColor = 'transparent';
    }
}
