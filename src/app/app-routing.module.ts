import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { BranchesComponent } from './pages/branches/branches.component';
import { HelpPqrComponent } from './pages/help-pqr/help-pqr.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',  // Redirige la ruta vacía a /inicio
    pathMatch: 'full'        // Asegura que solo la ruta vacía exacta sea redirigida
  },
  {
    path: '',
    children: [
      { path: 'inicio', component: HomeComponent },
      { path: 'productos', component: ProductsComponent },
      { path: 'nosotros', component: AboutComponent },
      { path: 'sedes', component: BranchesComponent },
      { path: 'eventos', component: EventsComponent },
      { path: 'ayuda-pqr', component: HelpPqrComponent },
    ]
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: '**', redirectTo: '/inicio' }  // Redirige cualquier ruta no encontrada a /inicio
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
