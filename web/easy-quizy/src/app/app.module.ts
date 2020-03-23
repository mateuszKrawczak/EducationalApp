import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './Components/top-navbar/top-navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { AccountMainComponent } from './Components/account/account-main/account-main.component';
import { LoginComponent } from './Components/login/login.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CategoryViewComponent } from './Components/category-view/category-view.component';
import { CategoryLevelsComponent } from './Components/category-levels/category-levels.component';
import { CategoryLevelsViewComponent } from './Components/category-levels-view/category-levels-view.component';
import { QuestionComponent } from './Components/question/question.component';
import { AuthGuard } from './guards/auth.guard';
import { EditorComponent } from './Components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    FooterComponent,
    MainContentComponent,
    SignUpComponent,
    AccountMainComponent,
    LoginComponent,
    CategoriesComponent,
    CategoryViewComponent,
    CategoryLevelsComponent,
    CategoryLevelsViewComponent,
    QuestionComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
