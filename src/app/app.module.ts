import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RightsideComponent } from './rightside/rightside.component';
import { HeaderComponent } from './header/header.component';
import { MoneyCardComponent } from './money-card/money-card.component';
import { ExpenseCardsComponent } from './expense-cards/expense-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    RightsideComponent,
    HeaderComponent,
    MoneyCardComponent,
    ExpenseCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
