import { Component } from '@angular/core';

@Component({
    selector: 'app-landing-timeline',
    templateUrl: './landing-timeline.component.html',
    styleUrls: ['./landing-timeline.component.scss']
})
export class LandingTimelineComponent {
    onCircleOver(event) {
        event.target.style.transform = 'scale(1.2)';
        event.target.parentNode.parentElement.getElementsByClassName('timeline-block__date')[0].style.opacity = '0.4';
    }

    onCircleOut(event) {
        event.target.style.transform = 'scale(1)';
        event.target.parentNode.parentElement.getElementsByClassName('timeline-block__date')[0].style.opacity = '0';
    }
}
