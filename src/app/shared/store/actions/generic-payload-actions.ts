import {Action} from '@ngrx/store';

export const UPDATE_PAYLOAD = 'UPDATE_PAYLOAD';
export const CLEAR_PAYLOAD = 'CLEAR_PAYLOAD';

// in payload attribute we can pass a model to infer the object type
export class UpdatePayloadAction implements Action {
  readonly type = UPDATE_PAYLOAD;

  /**
   * @param name - object identifier
   * @param payload - object data to persist
   */
  constructor(public name: any, public payload: any) {
  }
}

export class ClearPayloadAction implements Action {
  readonly type = CLEAR_PAYLOAD;

  constructor(public name: any, public payload: any) {
  }
}

export type All
  = UpdatePayloadAction
  | ClearPayloadAction;

/**
 *Reducer Action Example:
 *
 *  !-- Import interfaces --!
 *  import {GENERIC_PAYLOAD_CONSTS_LIST, GenericPayloadStateList} from './shared/store/interfaces/generic-payload-interfaces';
 *  import * as GenericPayloadActions from './shared/store/actions/generic-payload-actions';
 *
 *  !-- Inject Store --!
 *  constructor(public authService: AuthService, private mockSharedStore: Store<GenericPayloadStateList>){
 *  }
 *
 *  !-- Select Store /attach it to observable --!
 *  OnInit() {
 *    mockShared$ = this.mockSharedStore.select(state => state.mockSharedGenericState);
 *  }
 *
 *  !-- Dispatch Action --!
 *  this.mockSharedStore.dispatch(new GenericPayloadActions.UpdatePayloadAction(
 *    GENERIC_PAYLOAD_CONSTS_LIST.MOCK_SHARED_STATE,
 *    {
 *       name: 'Jean',
 *       role: 'Duck'
 *    }
 *   ));
 */
