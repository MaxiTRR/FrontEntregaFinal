import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoComponent } from './components/info/info.component';
import { ImageProfileComponent } from './components/image-profile/image-profile.component';
import { InfoTextComponent } from './components/info-text/info-text.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { interceptorProvider } from './services/interceptor-service';


const AppRoute:Routes =[
  {path: '', component:PortfolioComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'login', component:LoginComponent}
  
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ImageProfileComponent,
    InfoTextComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoute),
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
