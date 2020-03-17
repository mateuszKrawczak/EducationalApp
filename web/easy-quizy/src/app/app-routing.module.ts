import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AccountMainComponent } from './Components/account/account-main/account-main.component';
import { LoginComponent } from './Components/login/login.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CategoryLevelsComponent } from './Components/category-levels/category-levels.component';
import { QuestionComponent } from './Components/question/question.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: MainContentComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountMainComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: ':kategoria/poziomy', component: CategoryLevelsComponent}, 
  {path: ':kategoria/:poziom', component: QuestionComponent}, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
