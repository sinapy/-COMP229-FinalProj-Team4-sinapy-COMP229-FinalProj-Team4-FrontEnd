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

const routes: Routes = [
  {path: 'register', component: RegisterComponent}

  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
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
    LandingPageComponent
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
