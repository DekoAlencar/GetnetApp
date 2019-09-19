import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartsModule } from 'ng2-charts';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { FinanceiroService } from './service/fianceiro.service';
import { TransacaoService } from './service/transacao.service';

import { SituacaoPipe } from './pipe/situacao.pipe';
import { EnumPipe } from './pipe/enum.pipe';

import { AppComponent } from './app.component';
import { TransacaoComponent } from './transacao/transacao.component';
import { EditarTransacaoComponent } from './transacao/editar/editar.transacao.component';
import { ParamProvider } from './provider/param.provider';
import { FormsModule }   from '@angular/forms';
import { SistemaComponent } from './sistema/sistema.component';
import { SistemaSerivce } from './service/sistema.service';
import { EditarSistemaComponent } from './sistema/editar/editar.sistema.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EnumPipe,
    SituacaoPipe,
    TransacaoComponent,
    EditarTransacaoComponent,
    SistemaComponent,
    EditarSistemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ChartsModule,
    FormsModule
  ],
  providers: [
    FinanceiroService,
    TransacaoService,
    SistemaSerivce,
    ParamProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
