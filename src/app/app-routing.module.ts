import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocwordComponent } from './docword/docword.component';
import { MesdistComponent } from './mesdist/mesdist.component';

const routes: Routes = [
  {'path': 'docarchi',component:DocwordComponent},
  {path:'msdistribue', component:MesdistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
