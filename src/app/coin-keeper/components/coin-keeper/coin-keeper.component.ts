import { Component } from '@angular/core';

@Component({
    selector: 'app-coin-keeper',
    templateUrl: './coin-keeper.component.html',
    styleUrls: ['./coin-keeper.component.scss']
})
export class CoinKeeperComponent {
    cards = [
        {
            title: 'СБЕР',
            color: 'green',
            history: [
                {
                    date: '2021-03-23',
                    subj: 'Лента',
                    count: '1200',
                    comment: 'Коммент1'
                },
                {
                    date: '2021-03-22',
                    subj: 'КБ',
                    count: '300',
                    comment: 'Коммент2'
                },
            ],
            styleClass: 'card__sber'
        },
        {
            title: 'ГПБ',
            color: 'blue',
            styleClass: 'card__gpb'
        },
        {
            title: 'Открытие',
            color: 'cyan',
        },
        {
            title: 'Tinkoff',
            color: 'yellow',
        },
    ];
    isAnimateNext = false;
    isAnimatePrev = false;

    goToNext() {
        this.isAnimateNext = true;
        setTimeout(() => {
            this.isAnimateNext = false;
            const firstCard = this.cards[0];
            this.cards = this.cards.slice(1);
            this.cards.push(firstCard);
        }, 500);
    }

    goToPrev() {
        this.isAnimatePrev = true;
        setTimeout(() => {
            this.isAnimatePrev = false;
            const lastCard = this.cards.pop();
            this.cards = [lastCard].concat(this.cards);
        }, 500);
    }
}
