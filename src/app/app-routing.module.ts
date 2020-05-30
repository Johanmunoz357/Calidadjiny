import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { EmpresaComponent } from './empresas/empresa/empresa.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { VisitanteComponent } from './visitantes/visitante/visitante.component';


const routes: Routes = [ 
{
  path: 'empleado',
component: EmpleadoComponent
}
,
{
  path: 'empresa',
component: EmpresaComponent
}
,
{
  path: 'login',
component: LoginComponent
}
,
{
  path: 'visitante',
  component: VisitanteComponent
}
,
{ path: '**', redirectTo: 'login' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
