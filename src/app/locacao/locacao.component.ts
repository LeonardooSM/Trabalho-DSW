import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})
export class LocacaoComponent {
  clientes: any[] = [];
  lanchas: any[] = [];
  clienteSelecionado: any;
  lanchaSelecionada: any;
  quantidadeDias: number = 1;
  valorTotal: number = 0;

  constructor(private dadosService: DadosService) {
    this.clientes = this.dadosService.getClientes();
    this.lanchas = this.dadosService.getLanchas();
  }

  calcularValorTotal() {
    if (this.lanchaSelecionada && this.quantidadeDias > 0) {
      this.valorTotal = this.lanchaSelecionada.valor * this.quantidadeDias;
    }
  }

  fazerLocacao() {
    if (this.clienteSelecionado && this.lanchaSelecionada) {
      const locacao = {
        cliente: this.clienteSelecionado,
        lancha: this.lanchaSelecionada,
        quantidadeDias: this.quantidadeDias,
        valorTotal: this.valorTotal
      };
      this.dadosService.adicionarLocacao(locacao);
      alert('Locação realizada com sucesso!');
    } else {
      alert('Selecione um cliente e uma lancha.');
    }
  }
}
