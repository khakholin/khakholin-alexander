import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-wrapper',
    templateUrl: './landing-wrapper.component.html',
    styleUrls: ['./landing-wrapper.component.scss']
})
export class LandingWrapperComponent implements OnInit {
    ngOnInit(): void {
        console.log('test');
    }
}
