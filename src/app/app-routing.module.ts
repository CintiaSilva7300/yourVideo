import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YtComponent } from './components/yt/yt.component';

const routes: Routes = [
  {
    path: '',
    component: YtComponent,
  },
  {
    path: '**',
    component: YtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
