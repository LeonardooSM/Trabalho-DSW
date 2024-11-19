import { Component } from '@angular/core';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro-lanchas',
  templateUrl: './cadastro-lanchas.component.html',
  styleUrls: ['./cadastro-lanchas.component.css']
})
export class CadastroLanchasComponent {
  modelo: string = '';
  capacidade: number = 0;
  valor: number = 0;

  constructor(private dadosService: DadosService) {}

  cadastrarLancha() {
    const lancha = { modelo: this.modelo, capacidade: this.capacidade, valor: this.valor };
    this.dadosService.adicionarLancha(lancha);
    this.modelo = '';
    this.capacidade = 0;
    this.valor = 0;
    alert('Lancha cadastrada com sucesso!');
  }
}
