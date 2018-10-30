import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EventoDetailComponent }   from './evento-detail/evento-detail.component';
import { EventoPresencasComponent }   from './evento-presencas/evento-presencas.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'eventodetail/:id', component: EventoDetailComponent },
  { path: 'eventopresencas/:id', component: EventoPresencasComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
