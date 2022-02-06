import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { BannerComponent } from './banner/banner.component';
import { AccentBarComponent } from './accent-bar/accent-bar.component';
import { UpdatesComponent } from './updates/updates.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { HighlightsComponent } from './highlights/highlights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DocumentationComponent,
    BannerComponent,
    AccentBarComponent,
    UpdatesComponent,
    RoadmapComponent,
    HighlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
