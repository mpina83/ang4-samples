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
  itemsArray = [];

  constructor(private translate: TranslateService, private counterAStore: Store<any>) {
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
    for (let i = 0; i < 6000; i++) {
      this.itemsArray.push({id: i, name: 'pato'});
    }
    this.itemsArray.reverse();
  }

  checkModel(array, line, valueToBeupdated): void {
    console.log('Checking values');
    console.log('item: ' + line.name + ' with id: ' + line.id);
/*    line.name= valueToBeupdated.value;*/
    console.log('new val'  + line.name);
  }


  ngOnDestroy() {
    this.countASub.unsubscribe();
  }

}
