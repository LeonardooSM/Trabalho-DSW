import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent {
  nome: string = '';
  telefone: string = '';
  email: string = '';
  endereco: string = '';
  clientes: any[] = [];
  editando: boolean = false;
  clienteEditado: any = null;

  constructor(private dadosService: DadosService) {
    this.clientes = this.dadosService.getClientes();
  }

  cadastrarCliente() {
    if (this.editando && this.clienteEditado) {
      // Atualiza o cliente existente
      this.clienteEditado.nome = this.nome;
      this.clienteEditado.telefone = this.telefone;
      this.clienteEditado.email = this.email;
      this.clienteEditado.endereco = this.endereco;
      this.editando = false;
      this.clienteEditado = null;
    } else {
      // Adiciona um novo cliente ao DadosService
      const novoCliente = { nome: this.nome, telefone: this.telefone, email: this.email, endereco: this.endereco };
      this.dadosService.adicionarCliente(novoCliente);
    }

    // Atualiza a lista de clientes
    this.clientes = this.dadosService.getClientes();
    this.resetarFormulario();
  }

  editarCliente(cliente: any) {
    this.nome = cliente.nome;
    this.telefone = cliente.telefone;
    this.email = cliente.email;
    this.endereco = cliente.endereco;
    this.editando = true;
    this.clienteEditado = cliente;
  }

  excluirCliente(cliente: any) {
    this.dadosService.excluirCliente(cliente);
    this.clientes = this.dadosService.getClientes();
  }

  resetarFormulario() {
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.endereco = '';
    this.editando = false;
    this.clienteEditado = null;
  }
}
