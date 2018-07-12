import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomTreeComponent} from './custom-tree/custom-tree.component';
import {TreeFullComponent} from './tree-full/tree-full.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: CustomTreeComponent,
  },
  {
    path: 'full-tree', component: TreeFullComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
