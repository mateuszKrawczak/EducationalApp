import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AccountMainComponent } from './Components/account/account-main/account-main.component';
import { LoginComponent } from './Components/login/login.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CategoryLevelsComponent } from './Components/category-levels/category-levels.component';
import { QuestionComponent } from './Components/question/question.component';
import { AuthGuard } from './guards/auth.guard';
import { EditorComponent } from './Components/editor/editor.component';
import { ScoresComponent } from './Components/account/scores/scores.component';
import { RankingComponent } from './Components/ranking/ranking.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: MainContentComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ranking', component: RankingComponent, canActivate:[AuthGuard]},
  {path: 'account', component: AccountMainComponent, canActivate:[AuthGuard]}, 
  {path: 'account/scores', component: ScoresComponent, canActivate:[AuthGuard]},
  {path: 'categories', component: CategoriesComponent, canActivate:[AuthGuard]},
  {path: ':kategoria/poziomy', component: CategoryLevelsComponent, canActivate:[AuthGuard]}, 
  {path: ':kategoria/:poziom', component: QuestionComponent, canActivate:[AuthGuard]}, 
  {path: 'edytor', component:EditorComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
