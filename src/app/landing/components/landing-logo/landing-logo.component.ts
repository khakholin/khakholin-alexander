import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-landing-logo',
    templateUrl: './landing-logo.component.html',
    styleUrls: ['./landing-logo.component.scss']
})
export class LandingLogoComponent {
    @Output() downClick = new EventEmitter();
}
