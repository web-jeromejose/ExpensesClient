
import { Routes, RouterModule } from '@angular/router';



 // component
import { EntriesComponent } from './entries/entries.component';
import { NgModule } from '@angular/core';

 // route
const routes: Routes = [
  { path: '', component: EntriesComponent},
  { path: 'entries', component: EntriesComponent },
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouterModule{}
