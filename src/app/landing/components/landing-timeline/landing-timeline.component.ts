import { Component } from '@angular/core';
import { TIMELINE_INFO } from '@app/landing/models/constants';
import { ITimelineItem } from '@app/landing/models/types';

@Component({
    selector: 'app-landing-timeline',
    templateUrl: './landing-timeline.component.html',
    styleUrls: ['./landing-timeline.component.scss']
})
export class LandingTimelineComponent {
    timelineInfo = TIMELINE_INFO;

    newTimelineYear(
        currItem: ITimelineItem,
        nextItem: ITimelineItem,
    ): number | null {
        const currYear = currItem.date.getFullYear();
        if (nextItem) {
            const nextYear = nextItem.date.getFullYear();
            return currYear !== nextYear ? currYear : null;
        }
        return currYear;
    }

    onCircleOver(event) {
        event.target.parentNode.parentElement.getElementsByClassName(
            'timeline-block__date'
        )[0].style.opacity = '0.4';
    }

    onCircleOut(event) {
        event.target.parentNode.parentElement.getElementsByClassName(
            'timeline-block__date'
        )[0].style.opacity = '0';
    }
}
