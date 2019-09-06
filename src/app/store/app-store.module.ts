import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './effects/article.effects';
import { ArticleDataService } from './services/article-data.service';
import { ArticleSelectors } from './services/article.selectors';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('entityCache', reducers),
    EffectsModule.forFeature([ ArticleEffects ])
  ],
  providers: [
    ArticleDataService,
    ArticleSelectors,
  ],
  exports: [StoreModule, EffectsModule]
})
export class AppStoreModule {}
