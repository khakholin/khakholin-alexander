import { Component } from '@angular/core';
import { SOCIAL_ITEMS } from '@app/landing/models/constants';

@Component({
    selector: 'app-landing-contacts',
    templateUrl: './landing-contacts.component.html',
    styleUrls: ['./landing-contacts.component.scss']
})
export class LandingContactsComponent {
    socialItems = SOCIAL_ITEMS;
}
