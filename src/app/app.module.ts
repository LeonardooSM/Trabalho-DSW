import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes do sistema de locação de lanchas
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroLanchasComponent } from './cadastro-lanchas/cadastro-lanchas.component';
import { LocacaoComponent } from './locacao/locacao.component';
import { ListaLocacoesComponent } from './lista-locacoes/lista-locacoes.component';

// Serviço de dados para gerenciamento de informações
import { DadosService } from './dados.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    CadastroLanchasComponent,
    LocacaoComponent,
    ListaLocacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
