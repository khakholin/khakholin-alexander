import { Component, OnInit } from '@angular/core';
import { ICoinKeeperCard } from '@app/coin-keeper/models/coin-keeper';
import { CoinKeeperService } from '@app/coin-keeper/services/coin-keeper.service';

@Component({
    selector: 'app-coin-keeper',
    templateUrl: './coin-keeper.component.html',
    styleUrls: ['./coin-keeper.component.scss']
})
export class CoinKeeperComponent implements OnInit {
    cards: ICoinKeeperCard[] = [
        {
            styleClass: 'card-adding',
            title: '+',
            subTitle: 'Создать счет',
        },
    ];
    isAnimateNext = false;
    isAnimatePrev = false;

    constructor(private coinKeeperService: CoinKeeperService) {}

    ngOnInit() {
        this.loadCards();
    }

    loadCards() {
        this.coinKeeperService.loadCards().subscribe((data) => {
            this.cards = [...this.cards, ...data.cards];
        });
    }

    switchNext() {
        this.isAnimateNext = true;
        setTimeout(() => {
            this.isAnimateNext = false;
            const firstCard = this.cards[0];
            this.cards = this.cards.slice(1);
            this.cards.push(firstCard);
        }, 500);
    }

    switchPrev() {
        this.isAnimatePrev = true;
        setTimeout(() => {
            this.isAnimatePrev = false;
            const lastCard = this.cards.pop();
            this.cards = [lastCard, ...this.cards];
        }, 500);
    }
}
