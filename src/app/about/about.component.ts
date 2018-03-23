import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  counterA$: Observable<any>;
  countASub: Subscription;

  constructor(private translate: TranslateService,  private counterAStore: Store<any>) {
    this.counterA$ = this.counterAStore.select('counterAStore');
    this.countASub = this.counterA$.subscribe(res => {
      console.log('InitCounter in About');
      console.log(res);
    });
    this.translate.resetLang('pt');
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }

  ngOnInit() {
    this.translate.use('pt');

  }
  ngOnDestroy() {
    this.countASub.unsubscribe();
  }

}
