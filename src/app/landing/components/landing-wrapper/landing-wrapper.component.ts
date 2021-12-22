import { DOCUMENT } from '@angular/common';
import { Component, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ENavigationItems } from '@app/landing/models/enums';

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
    readonly navigationSocialItems = [
        {url: 'http://vk.com/khakholin', iconClass: 'fa-vk'},
        {url: 'http://instagram.com/khakholin', iconClass: 'fa-instagram'},
        {url: 'http://vk.com/khakholin', iconClass: 'fa-github'},
    ];

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private router: Router,
        private renderer: Renderer2,
    ) {}

    get navigationItems(): string[] {
        return Object.values(ENavigationItems);
    }

    navigateTo(itemName: string): void {
        const {ABOUT, CONTACTS, TIMELINE, SIGN_IN} = ENavigationItems;

        if (itemName === SIGN_IN) {
            this.router.navigate([SIGN_IN]);
            return;
        }

        const childName = {
            [ABOUT]: 'landingAboutEl',
            [CONTACTS]: 'landingContactsEl',
            [TIMELINE]: 'landingTimelineEl',
        }[itemName];
        if (childName) {
            this[childName].nativeElement.scrollIntoView({ behavior: 'smooth' });
        }

        this.toggleNavigation();
    }

    onBurgerClick(): void {
        this.toggleNavigation();
    }

    private toggleNavigation(): void {
        this.renderer.setStyle(
            document.body,
            'overflow',
            this.isNavigationShown ? 'visible' : 'hidden',
        );
        this.isNavigationShown = !this.isNavigationShown;
    }
}
