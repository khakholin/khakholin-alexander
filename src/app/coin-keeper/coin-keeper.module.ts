import { NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { CoinKeeperComponent } from './components/coin-keeper/coin-keeper.component';
import { CoinKeeperRoutingModule } from './coin-keeper-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
      CoinKeeperComponent,
    ],
    imports: [
        CommonModule,
        CoinKeeperRoutingModule,
    ],
    providers: [
      DatePipe,
    ],
    bootstrap: []
})
export class CoinKeeperModule { }
