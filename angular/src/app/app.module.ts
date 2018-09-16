import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { 
  MatToolbarModule, 
  MatMenuModule, 
  MatButtonModule, 
  MatIconModule, 
  MatCardModule, 
  MatSidenavModule, 
  MatTabsModule, 
  MatListModule,
  MatExpansionModule,
  MatProgressSpinnerModule
} from '@angular/material';
/* import {MatExpansionModule} from '@angular/material/expansion'; */
import { MainComponent } from './main/main.component';
import { PlanComponent } from './plan/plan.component';
import { SubstitutionsComponent } from './substitutions/substitutions.component';
import { SettingsComponent } from './settings/settings.component';

import { CardActiveComponent } from './card-active/card-active.component';
import { CardInactiveComponent } from './card-inactive/card-inactive.component';
import { CardCurrentComponent } from './card-current/card-current.component';
import { CardCompletedComponent } from './card-completed/card-completed.component';
import { CardExpandableComponent } from './card-expandable/card-expandable.component';
const appRoutes: Routes = [
  { path: '', component: MainComponent, data: { title: 'Strona Główna' } },
  { path: 'main', component: MainComponent, data: { title: 'Strona Główna' } },
  { path: 'plan', component: PlanComponent, data: { title: 'Plan lekcji' } },
  { path: 'substitutions', component: SubstitutionsComponent, data: { title: 'Zastępstwa' } },
  { path: 'settings', component: SettingsComponent, data: { title: 'Ustawienia' } },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlanComponent,
    SubstitutionsComponent,
    SettingsComponent,
    CardActiveComponent,
    CardInactiveComponent,
    CardCurrentComponent,
    CardCompletedComponent,
    CardExpandableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
