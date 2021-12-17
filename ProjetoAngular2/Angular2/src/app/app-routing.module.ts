import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Cabecalho/header/header.component';
import { BodyComponent } from './Home/body/body.component';
import { NavComponent } from './Sobre/nav/nav.component';

const routes: Routes = [
  { path:'', 
    component:HeaderComponent,
    children: [
    { path:'home', component:BodyComponent },
    { path:'sobre', component:NavComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
