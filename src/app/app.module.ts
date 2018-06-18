import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreComponent} from './store/store.component';
import {CoursesComponent} from './courses/courses.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Http, HttpModule} from '@angular/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {counterReducer, namedCounterReducer} from './shared/store/reducers/counter-reducer';
import {VirtualScrollModule} from 'angular2-virtual-scroll';
import {createNamedWrapperReducer} from './shared/store/reducers/high-order-reducer';
import {GENERIC_PAYLOAD_CONSTS_LIST} from './shared/store/interfaces/generic-payload-interfaces';
import {genericPayloadReducer} from './shared/store/reducers/generic-payload-reducer';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// re-use original reducer
/*export function combReducers() {
  return combineReducers({
     counterAState: counterReducer,
  /!*  counterBState: namedCounterReducer(counterReducer, 'counterBState')*!/
  });
}*/

interface ApplicationState {
  counterBState: any;
  counterAState: any;
  mockSharedGenericState: any;
}
export const productionReducer: ActionReducerMap<ApplicationState> = {
  counterAState : null,
  counterBState : null,
  mockSharedGenericState: null
};
productionReducer.mockSharedGenericState = createNamedWrapperReducer(genericPayloadReducer, GENERIC_PAYLOAD_CONSTS_LIST.MOCK_SHARED_STATE);
productionReducer.counterAState = namedCounterReducer(counterReducer, 'counterAState');
productionReducer.counterBState = namedCounterReducer(counterReducer, 'counterBState');


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    StoreModule.forRoot(
      (productionReducer)
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    VirtualScrollModule,
    NgxDatatableModule,
    ToastrModule.forRoot(), // ToastrModule Added
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
