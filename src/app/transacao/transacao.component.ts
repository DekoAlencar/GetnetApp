import { ParamProvider } from './../provider/param.provider';
import { AppConfig } from './../app.config';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { FinanceiroService } from '../service/fianceiro.service';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styles: []
})
export class TransacaoComponent implements OnInit {
  transacoes : Array<any>;
  selectOptions: Array<any>;
  modalActions = new EventEmitter<string|MaterializeAction>();
  detalhe: Object;
  router:Router;

  constructor(private service: FinanceiroService, router: Router, private provide: ParamProvider) { 
    this.router = router; 
  }

  dateOptions = AppConfig.dateOptions;

  ngOnInit() {
    this.listar();
    this.detalhe = false;
  }

  listar(){
    this.service.transacoes().subscribe(dados => this.transacoes = dados);
    this.selectOptions = [{name: "Pendente",value:1},{name: "Aceito",value:2},{name: "Negado", value:3}, {name: "Emitido", value:4}];
  }

  editar(value:any){
    this.provide.data = value; 
    this.router.navigate(['transacoes.editar']);
  }

  openModal(transacao : Object) {
    this.detalhe = Object;
    this.detalhe = transacao;
    this.modalActions.emit({action:"modal",params:['open']});
  }
  
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

}
