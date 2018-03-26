import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import {GenericPayloadStateList} from './shared/store/interfaces/generic-payload-interfaces';
import {Subscription} from 'rxjs/Subscription';

export interface CounterAState {
  counterAState: number;
}

export interface CounterBState {
  counterBState: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  counterA$: Observable<number>;
  counterB$: Observable<number>;
  appSubs = new Subscription();
  countA = 0;
  alive = true;
  mockGeneric$: Observable<any>;

  constructor(private translate: TranslateService, private counterAStore: Store<CounterAState>,
              private counterBStore: Store<CounterBState>, private mockGenericStore: Store<GenericPayloadStateList>) {
  }

  ngOnInit() {
    this.counterA$ = this.counterAStore.select(state => state.counterAState);
    this.counterB$ = this.counterBStore.select(state => state.counterBState);
    this.translate.setDefaultLang('en');
    this.translate.use('pt');
    this.counterA$.takeWhile(() => this.alive).subscribe(value => {
      if (value !== undefined) {
        console.log('setting value: ' + value);
        this.countA = value * 10;
      }
    });
    this.mockGeneric$ = this.mockGenericStore.select(state => state.mockSharedGenericState);
    this.appSubs.add(
      this.mockGeneric$.subscribe(result => {
          if (result !== undefined) {
            console.log(result.name);
          }
        }
      )
    );
  }

  ngOnDestroy() {
    this.alive = false;
    this.appSubs.unsubscribe();
  }
}
