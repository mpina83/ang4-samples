import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AboutRoutingModule} from './about-routing.module';
import {AboutComponent} from './about.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {Http} from '@angular/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {VirtualScrollModule} from 'angular2-virtual-scroll';


export function createAboutTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/about/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AboutRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createAboutTranslateLoader),
        deps: [Http]
      }
    }),
    VirtualScrollModule
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
