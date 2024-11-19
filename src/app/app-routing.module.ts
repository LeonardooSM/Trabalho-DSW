import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { CadastroLanchasComponent } from './cadastro-lanchas/cadastro-lanchas.component';
import { LocacaoComponent } from './locacao/locacao.component';
import { ListaLocacoesComponent } from './lista-locacoes/lista-locacoes.component';

const routes: Routes = [
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'cadastro-lanchas', component: CadastroLanchasComponent },
  { path: 'locacao', component: LocacaoComponent },
  { path: 'lista-locacoes', component: ListaLocacoesComponent },
  { path: '', redirectTo: '/cadastro-clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
