import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {CoursesComponent} from './courses/courses.component';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'about',
    loadChildren: ('app/about/about.module#AboutModule')
    /*component: AboutComponent*/
  },
  {
    path: 'features',
    loadChildren: ('app/features/features.module#FeaturesModule')
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/store',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
