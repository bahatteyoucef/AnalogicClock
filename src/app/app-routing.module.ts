import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontreAnalogicComponent } from './Montre-Analogic/montre-Analogic.component';

const routes: Routes = [
  {path:'' ,redirectTo:'MontreAnalogic',pathMatch:'full'},
  {path:'MontreAnalogic' ,component:MontreAnalogicComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
