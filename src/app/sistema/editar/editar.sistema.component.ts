import { SistemaSerivce } from './../../service/sistema.service';
import { ParamProvider } from './../../provider/param.provider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editar.sistema',
  templateUrl: './editar.sistema.component.html',
  styles: []
})
export class EditarSistemaComponent implements OnInit {
  
  titulo: String;
  sistema: Object;
  router: Router;
  msgError: String;
  msgSuccess: String;

  constructor(private service: SistemaSerivce, private provider: ParamProvider, router: Router) {
    this.router = router;  
  }

  ngOnInit() {
    this.organizarObjetos(this.provider.data);
  }

  organizarObjetos(dados){
    let objetoVazio = [{token: "", urlAtualizacao: "", nome: ""}];
    this.titulo = dados ? 'Editar' : 'Cadastrar';
    this.sistema = dados ? dados : objetoVazio;
  }

  cadastar(form: NgForm){
    return this.service.cadastar(form.value).subscribe(res =>  this.msgSuccess = "Cadastrado Com sucesso", erro =>  this.msgError = "Não foi possivel castrar");
  }

  cancelar(dados:any){
    this.provider.data = "";
    this.router.navigate(['sistema']);
  }
}
