import { ParamProvider } from './../provider/param.provider';
import { SistemaSerivce } from '../service/sistema.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: []
})
export class SistemaComponent implements OnInit {
  sistemas: any[];
  route: Router;
  constructor(private service: SistemaSerivce, route: Router, private param: ParamProvider) { 
    this.route = route;
  }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.service.listar().subscribe(res => this.sistemas = res);
  }

  cadastrar(){
    this.route.navigate(['sistema.editar']);
  }

  editar(dados:Object){
    this.param.data = dados;
    this.route.navigate(['sistema.editar']);
  }
}
