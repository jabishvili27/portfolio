import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FooterComponent } from './components/footer/footer.component';

const Route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
];
const options: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Route, options),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
