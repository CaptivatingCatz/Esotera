import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccentBarComponent } from './accent-bar/accent-bar.component';
import { BannerComponent } from './banner/banner.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];


