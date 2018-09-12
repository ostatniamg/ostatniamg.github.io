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
  MatListModule 
} from '@angular/material';
import { MainComponent } from './main/main.component';
import { PlanComponent } from './plan/plan.component';
import { SubstitutionsComponent } from './substitutions/substitutions.component';
import { SettingsComponent } from './settings/settings.component';
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
    SettingsComponent
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
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
