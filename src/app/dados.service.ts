import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private clientes: any[] = [];
  private lanchas: any[] = [];
  private locacoes: any[] = [];

  // Gerenciamento de Clientes
  adicionarCliente(cliente: any) {
    this.clientes.push(cliente);
  }

  getClientes() {
    return this.clientes;
  }

  editarCliente(index: number, clienteAtualizado: any) {
    this.clientes[index] = clienteAtualizado;
  }

  excluirCliente(index: number) {
    this.clientes.splice(index, 1);
  }

  // Gerenciamento de Lanchas
  adicionarLancha(lancha: any) {
    this.lanchas.push(lancha);
  }

  getLanchas() {
    return this.lanchas;
  }

  editarLancha(index: number, lanchaAtualizada: any) {
    this.lanchas[index] = lanchaAtualizada;
  }

  excluirLancha(index: number) {
    this.lanchas.splice(index, 1);
  }

  // Gerenciamento de Locações
  adicionarLocacao(locacao: any) {
    this.locacoes.push(locacao);
  }

  getLocacoes() {
    return this.locacoes;
  }

  excluirLocacao(index: number) {
    this.locacoes.splice(index, 1);
  }
}
