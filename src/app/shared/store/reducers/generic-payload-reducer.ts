import * as GenericPayloadActions from '../actions/generic-payload-actions';
import {State} from '@ngrx/store';

export function genericPayloadReducer(state: any = {}, action: GenericPayloadActions.All): State<any> {
  const reset: any = {};
  switch (action.type) {
    case GenericPayloadActions.UPDATE_PAYLOAD: {
      return action.payload;
    }
    case GenericPayloadActions.CLEAR_PAYLOAD: {
      return reset;
    }
    default: {
      return state;
    }
  }
}
