import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { SOCIAL_ITEMS } from '@app/landing/models/constants';
import { ENavigationItems, ESocialKeys } from '@app/landing/models/enums';
import { ISocialItem } from '@app/landing/models/types';

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

    constructor(
        private router: Router,
        private renderer: Renderer2,
    ) {}

    get navigationSocialItems(): ISocialItem[] {
        const {VK, INSTAGRAM, GITHUB} = ESocialKeys;
        return SOCIAL_ITEMS.filter((item: ISocialItem) => (
            [VK, INSTAGRAM, GITHUB].includes(item.key)
        ));
    }

    get navigationItems(): string[] {
        return Object.values(ENavigationItems);
    }

    navigateTo(itemName: string, withoutToggle?: boolean): void {
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

        if (withoutToggle) { return; }

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
