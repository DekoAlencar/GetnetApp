import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TransacaoService{

    constructor (private http: HttpClient){}

    cancelar(idTransacao: any){
        return this.http.get<any>(environment.url+'cancelar/'+idTransacao);
    }

    atualizar(transacao: any){
        return this.http.post<any>(environment.url+'atualizar',transacao);
    }
    
}