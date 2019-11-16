import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//path : une chaine qui correspond à l'url dans la barre d'adresse du navigateur
//component: le composant que le routeur doit créer lors de la navigation vers cet itinéraire
const routes: Routes = [
  //pour que l'application accède automatiquement au tableau de bord (dashboard)
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({  
  //ajout de RouterModule au AppRoutingModule et le configure avec le routes
  imports: [RouterModule.forRoot(routes)],
  //le rendre exportable, afin qu"il soit disponible dans toute l'application
  exports: [RouterModule]
})

export class AppRoutingModule { }
