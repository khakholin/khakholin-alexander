import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICoinKeeperCard } from '../models/coin-keeper';

@Injectable({
    providedIn: 'root'
})
export class CoinKeeperService {
  loadCards(): Observable<{cards: ICoinKeeperCard[]}> {
    return of({
      cards: [
        {
          title: 'СБЕР',
          history: [
            {
              date: '2021-03-22',
              subj: 'КБ',
              sum: '300',
              comment: 'LAST'
            },
          ],
          styleClass: 'card__sber'
      },
        {
          title: 'ГПБ',
          styleClass: 'card__gpb'
        },
        {
          title: 'ОТКРЫТИЕ',
          styleClass: 'card__open'
        },
        {
          title: 'TINKOFF',
          styleClass: 'card__tinkoff'
        },
      ],
    });
  }
}
