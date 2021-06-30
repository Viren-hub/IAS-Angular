import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { SidebarComponent } from './MyComponents/sidebar/sidebar.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventCardsComponent } from './MyComponents/event-cards/event-cards.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import { EventSteperComponent } from './MyComponents/event-steper/event-steper.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import {ClientServiceService} from "./client-service.service";
import  {LeaderBordDataService} from './Services/leader-bord-data.service';
import { PopOverComponent } from './MyComponents/pop-over/pop-over.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './MyComponents/login/login.component';
import { TableComponent } from './MyComponents/table/table.component';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    EventCardsComponent,
    EventSteperComponent,
    PopOverComponent,
    LoginComponent,
    TableComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    FormsModule,
    MatStepperModule,
    MatTabsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [ClientServiceService,LeaderBordDataService],
  bootstrap: [AppComponent],
  entryComponents: [PopOverComponent]
  
})
export class AppModule { }
