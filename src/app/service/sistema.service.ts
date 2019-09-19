import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class SistemaSerivce{
    constructor (private http: HttpClient){}

    // http://www.daypark.com/v1/public/transacao/atualizar
    
    cadastar(dados:any){
        return this.http.put<any>(environment.url+'sistema',dados);
    }
    
    atualizar(dados){
        return this.http.post<any>(environment.url+'sistema',dados);
    }
    
    listar(){
        return this.http.get<any>(environment.url+'sistema');
    }
}