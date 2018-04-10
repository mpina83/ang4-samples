import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {CounterAState, CounterBState} from '../app.component';
import {DECREMENT, INCREMENT, RESET} from '../shared/store/reducers/counter-reducer';
import {GENERIC_PAYLOAD_CONSTS_LIST, GenericPayloadStateList} from '../shared/store/interfaces/generic-payload-interfaces';
import * as GenericPayloadActions from '../shared/store/actions/generic-payload-actions';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit, OnDestroy {
  counterA$: Observable<number>;
  counterB$: Observable<number>;
  countA = 0;
  mockStore$: Observable<any>;
  alive = true;
  mockJson = [];

  constructor(private counterAStore: Store<CounterAState>, private counterBStore: Store<CounterBState>,
              private mockGenericStore: Store<GenericPayloadStateList>) {
  }

  incrementA() {
    console.log('Incrementing in counterA$');
    this.counterAStore.dispatch({type: INCREMENT, target: 'counterAState'});
  }

  decrementA() {
    console.log('Decrement in counterA$');
    this.counterAStore.dispatch({type: DECREMENT, target: 'counterAState'});
  }

  resetA() {
    console.log('Reset in counterA$');
    this.counterAStore.dispatch({type: RESET, target: 'counterAState'});
  }

  incrementB() {
    console.log('Incrementing in counterB$');
    this.counterBStore.dispatch({type: INCREMENT, target: 'counterBState'});
  }

  decrementB() {
    console.log('Decrement in counterA$');
    this.counterBStore.dispatch({type: DECREMENT, target: 'counterBState'});
  }

  resetB() {
    console.log('Reset in counterA$');
    this.counterBStore.dispatch({type: RESET, target: 'counterBState'});
  }

  setMockGenericValue(): void {
    this.mockGenericStore.dispatch(new GenericPayloadActions.UpdatePayloadAction(
      GENERIC_PAYLOAD_CONSTS_LIST.MOCK_SHARED_STATE,
      {
        name: 'Pato',
        role: 'Super Admin'
      }));
  }

  ngOnInit() {
    this.counterA$ = this.counterAStore.select(state => state.counterAState);
    this.counterB$ = this.counterBStore.select(state => state.counterBState);

    this.mockStore$ = this.mockGenericStore.select(state => state.mockSharedGenericState);

    this.counterA$.takeWhile(() => this.alive).subscribe(value => {
      if (value !== undefined) {
        console.log('setting value: ' + value);
        this.countA = value * 10;
      }
    });

    this.mockJson.push({
      'name': 'Ethel Price',
      'gender': 'female',
      'company': 'Johnson, Johnson and Partners, LLC CMP DDC',
      'age': 22
    });
  }
  setGenderValue(value) {
    this.mockJson[0].gender = value.value;
  }

  ngOnDestroy() {
    console.log('Destroying!! Store component');
    this.alive = false;
  }

}
