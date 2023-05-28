import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { PersonaEditComponent } from './components/acercade/persona-edit/persona-edit.component';
//import { EditBannerComponent } from './components/header/banner/edit-banner.component';
import { ExpAddComponent } from './components/curriculum/experiencia/exp-add/exp-add.component';
import { ExpEditComponent } from './components/curriculum/experiencia/exp-edit/exp-edit.component';
import { EduAddComponent } from './components/curriculum/educacion/edu-add/edu-add.component';
import { EduEditComponent } from './components/curriculum/educacion/edu-edit/edu-edit.component';
import { HabAddComponent } from './components/habilidades/hab-add/hab-add.component';
import { HabEditComponent } from './components/habilidades/hab-edit/hab-edit.component';
import { ProyectAddComponent } from './components/proyectos/proyect-add/proyect-add.component';
import { ProyectEditComponent } from './components/proyectos/proyect-edit/proyect-edit.component';
import { CVEditComponent } from './components/curriculum/cv-edit.component';
import { MailEditComponent } from './components/contacto/mail-edit/mail-edit.component';

const routes: Routes = [
  {path: 'ingreso', component: LoginComponent},
  {path: '', component: PortafolioComponent},
  {path: 'persona-edit/:id', component: PersonaEditComponent},
  //{path: 'banner-edit/:id', component: EditBannerComponent},
  {path: 'CV-edit/:id', component: CVEditComponent},
  {path: 'nueva-exp', component: ExpAddComponent},
  {path: 'nueva-edu', component: EduAddComponent},
  {path: 'nueva-hab', component: HabAddComponent},
  {path: 'nuevo-proy', component: ProyectAddComponent},
  {path: 'editar-exp/:id', component: ExpEditComponent},
  {path: 'editar-edu/:id', component: EduEditComponent}, 
  {path: 'editar-hab/:id', component: HabEditComponent}, 
  {path: 'editar-proy/:id', component: ProyectEditComponent},
  {path: 'mail-edit/:id', component: MailEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
