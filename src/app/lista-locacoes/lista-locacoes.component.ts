import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-lista-locacoes',
  templateUrl: './lista-locacoes.component.html',
  styleUrls: ['./lista-locacoes.component.css']
})
export class ListaLocacoesComponent {
  locacoes: any[] = [];

  constructor(private dadosService: DadosService) {
    this.atualizarListaLocacoes();
  }

  atualizarListaLocacoes() {
    this.locacoes = this.dadosService.getLocacoes();
  }

  editarLocacao(locacao: any) {
    locacao.editando = true; // Marca a locação como em modo de edição
  }

  salvarEdicao(locacao: any) {
    locacao.valorTotal = locacao.quantidadeDias * locacao.lancha.valor; // Atualiza o valor total
    locacao.editando = false; // Sai do modo de edição
    alert('Locação atualizada com sucesso!');
  }

  cancelarEdicao(locacao: any) {
    locacao.editando = false; // Sai do modo de edição sem salvar
  }

  atualizarValorTotal(locacao: any) {
    locacao.valorTotal = locacao.quantidadeDias * locacao.lancha.valor;
  }

  excluirLocacao(index: number) {
    this.dadosService.excluirLocacao(index);
    this.atualizarListaLocacoes();
    alert('Locação excluída com sucesso!');
  }
}
