import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAtletaComponent } from './components/listar-atleta/listar-atleta.component';

const routes: Routes = [
  {path:'', redirectTo: 'atleta', pathMatch:'full'},
  {path:'atleta', component:ListarAtletaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
