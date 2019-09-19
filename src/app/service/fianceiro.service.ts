import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from './../app.config';
import { environment } from 'src/environments/environment';

@Injectable()
export class FinanceiroService{

    constructor (private http: HttpClient){}

    transacoes(){
        return this.http.get<any[]>(environment.url+'financeiro');
    }

    resumo(){
        return this.http.get<any[]>(environment.url+'financeiro/resumo/'+'01-05-2019'+'/'+'30-05-2019');
    }

}