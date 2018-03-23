import {Component, OnDestroy} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';

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
export class AppComponent implements OnDestroy {
  counterA$: Observable<number>;
  counterB$: Observable<number>;
  countA = 0;
  alive = true;

  constructor(private translate: TranslateService, private counterAStore: Store<CounterAState>,
              private counterBStore: Store<CounterBState>) {
    this.counterA$ = counterAStore.select(state => state.counterAState);
    this.counterB$ = counterBStore.select(state => state.counterBState);
    this.translate.setDefaultLang('en');
    this.translate.use('pt');
    this.counterA$.takeWhile(() => this.alive).subscribe(value => {
      if (value !== undefined) {
        console.log('setting value: ' + value);
        this.countA = value * 10;
      }
    });
  }



  ngOnDestroy() {
    this.alive = false;
  }
}
