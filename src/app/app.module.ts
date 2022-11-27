import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from "./components/partials/footer/footer.component";
import { HeaderComponent } from './components/partials/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HowWorkComponent } from './pages/how-work/how-work.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { CreatePostComponent } from './pages/post/create-post/create-post.component';
import { DetailsComponent } from './pages/post/details/details.component';
import { ViewPostsComponent } from './pages/post/view-posts/view-posts.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'how-work', component: HowWorkComponent},

  {path: '**', component: NotfoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    NotfoundComponent,
    ForgotPasswordComponent,
    HowWorkComponent,
    LandingPageComponent,
    LoginComponent,
    CreatePostComponent,
    DetailsComponent,
    ViewPostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
