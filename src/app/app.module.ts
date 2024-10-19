import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthunticationComponent } from './authuntication/authuntication.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CustAuthunticationComponent } from './cust-authuntication/cust-authuntication.component';
import { NavigationComponent } from './home-page/navigation/navigation.component';
import { MainComboComponent } from './main-combo/main-combo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthunticationComponent,
    AdminPanelComponent,
    CustAuthunticationComponent,
    NavigationComponent,
    MainComboComponent
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
