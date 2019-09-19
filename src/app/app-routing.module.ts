import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponetComponent }  from './dashboard/dashboard.component';
import { TransacaoComponent } from './transacao/transacao.component';
import { EditarTransacaoComponent } from './transacao/editar/editar.transacao.component';
import { SistemaComponent } from './sistema/sistema.component';
import { EditarSistemaComponent } from './sistema/editar/editar.sistema.component';

const routes: Routes = [
  {path: '' ,  redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponetComponent},
  {path: 'transacoes', component: TransacaoComponent},
  {path: 'transacoes.editar', component:EditarTransacaoComponent},
  {path: 'sistema', component: SistemaComponent},
  {path: 'sistema.editar', component: EditarSistemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponetComponent];