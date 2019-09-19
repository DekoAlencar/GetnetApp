import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../service/fianceiro.service';

@Component({
  selector: 'app-dashboard-componet',
  templateUrl:'./dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponetComponent implements OnInit {

  cards:Array<Object>;
  selectOptions: Array<Object>;

  constructor(private service: FinanceiroService) { }

  public pieChartLabels = ['Pagos', 'Parcial'];
  public pieChartData = [1100, 700,];
  public pieChartType = 'polarArea';

  public lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Aprovado' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Negado' }
    // { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C' }
  ];
  public lineChartLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

  public lineChartType = 'line';

  ngOnInit() {
    this.service.resumo().subscribe(res => this.fatoraListaResumo(res));
    
  }

  fatoraListaResumo(resumo){
    var boleto = [];
    var credito = [];
    var debito = [];

    resumo.forEach(element => {
      switch(element.tipo){
        case "B":
          element.situcao != "Pendente" ? boleto.push({aprovado : element.total}) : boleto.push({pendente : element.total});
          break;
        case "C":
          element.situcao != "Negado" ? credito.push({aprovado : element.total}) : credito.push({negado : element.total});
          break;
        case "D":
          element.situcao != "Pendente" ? debito.push({aprovado : element.total}) : debito.push({pendente : element.total});
          break;
        default:
          break;
      }
    });
    this.montarCards(debito, credito, boleto);
  }

  montarCards(debito:any, credito:any, boleto:any){
    this.cards = [
      {
        tipo: 'Debito', 
        valor: parseFloat(debito[0].aprovado) + parseFloat(debito[1].pendente),
        pendete: debito[1].pendente,
        aprovado: debito[0].aprovado
      },{
        tipo: 'Credito',
        valor: parseFloat(credito[0].aprovado) + parseFloat(credito[1].negado),
        negado: credito[1].negado,
        aprovado: credito[0].aprovado
      },{
        tipo: 'Boleto',
        valor: parseFloat(boleto[0].aprovado) + parseFloat(boleto[1].pendente)  ,
        pendente: boleto[1].pendente,
        aprovado: boleto[0].aprovado
    }]
  }

}
