import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './effects/article.effects';
import { ArticleDataService } from './services/article-data.service';
import { ArticleSelectors } from './services/article.selectors';
import { reducers } from './reducers';
import { environment } from '../../environments/environment';
import { NgrxDataModule, DefaultDataServiceConfig } from 'ngrx-data';
import { entityConfig } from './entity-metadata';

const apiRoot = environment.apiUrlBase + '/';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: apiRoot,
  entityHttpResourceUrls: {
    Post: { entityResourceUrl: apiRoot + 'posts/', collectionResourceUrl: apiRoot},
    Article: { entityResourceUrl: apiRoot + 'article/', collectionResourceUrl: apiRoot},
  }
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot(entityConfig),
  ],
  providers: [
    {provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig}
  ],

})
export class AppStoreModule {}
