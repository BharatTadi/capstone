import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthunticationComponent } from './authuntication/authuntication.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CustAuthunticationComponent } from './cust-authuntication/cust-authuntication.component';
const routes: Routes = [
  {path:'',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
