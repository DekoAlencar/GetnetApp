import { TransacaoService } from './../../service/transacao.service';
import { ParamProvider } from '../../provider/param.provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl:'./editar.component.html',
  styles: []
})
export class EditarTransacaoComponent implements OnInit {
  transacao: Object;
  constructor(private service: TransacaoService , private provider: ParamProvider) { }

  ngOnInit() {
    this.transacao = this.provider.data;
  }

  atualizar(){}

  cancelar(id: any){
    
  }

  envioOrigem(){}
}
