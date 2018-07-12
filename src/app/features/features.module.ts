import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeaturesRoutingModule} from './features-routing.module';
import {CustomTreeComponent} from './custom-tree/custom-tree.component';
import {TreeModule} from 'angular-tree-component';
import {TreeFullComponent} from './tree-full/tree-full.component';


@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    TreeModule
  ],
  declarations: [CustomTreeComponent, TreeFullComponent],
  exports: [CustomTreeComponent]
})
export class FeaturesModule { }
