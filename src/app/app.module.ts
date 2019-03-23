import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { LineComponent } from './line/line.component';
import { ArticleComponent } from './article/article.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { ButtonComponent } from './button/button.component';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { AboutComponent } from './about/about.component';
import { ArticleOverviewComponent } from './article-overview/article-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LineComponent,
    ArticleComponent,
    SeperatorComponent,
    ButtonComponent,
    ArticleFeedComponent,
    ArticleCreationComponent,
    AboutComponent,
    ArticleOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
