import {Action} from '@ngrx/store';

export const SET_ENGLISH_LANG = 'en';
export const SET_PORTUGUESE_LANG = 'pt';
export const SET_DEFAULT_LANG = 'en';

export class SetEnglishLangAction implements Action {
  readonly type = SET_ENGLISH_LANG;

  constructor(public name) {
  }
}

export class SetPortugueseLangAction implements Action {
  readonly type = SET_PORTUGUESE_LANG;

  constructor(public name) {
  }
}

export class SetDefaultLangAction implements Action {
  readonly type = SET_DEFAULT_LANG;

  constructor(public name) {
  }
}
export type All = SetEnglishLangAction | SetPortugueseLangAction | SetDefaultLangAction;
