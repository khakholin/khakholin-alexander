import { NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import { CoinKeeperComponent } from './components/coin-keeper/coin-keeper.component';
import { CoinKeeperRoutingModule } from './coin-keeper-routing.module';
import { MaterialModule } from '@app/material.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
    declarations: [
      CoinKeeperComponent,
    ],
    imports: [
        CoinKeeperRoutingModule,
        CommonModule,
        MaterialModule,
        PerfectScrollbarModule,
    ],
    providers: [
      DatePipe,
    ],
    bootstrap: []
})
export class CoinKeeperModule { }
