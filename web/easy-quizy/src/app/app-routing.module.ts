import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AccountMainComponent } from './Components/account/account-main/account-main.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: MainContentComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'account', component: AccountMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
