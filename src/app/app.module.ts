import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { interceptorProvider } from './services/inter-service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/curriculum/experiencia/experiencia.component';
import { EducacionComponent } from './components/curriculum/educacion/educacion.component';
import { ExpAddComponent } from './components/curriculum/experiencia/exp-add/exp-add.component';
import { ExpEditComponent } from './components/curriculum/experiencia/exp-edit/exp-edit.component';
import { EduAddComponent } from './components/curriculum/educacion/edu-add/edu-add.component';
import { PersonaComponent } from './components/acercade/persona/persona.component';
import { PersonaEditComponent } from './components/acercade/persona-edit/persona-edit.component';
import { HabEditComponent } from './components/habilidades/hab-edit/hab-edit.component';
import { HabAddComponent } from './components/habilidades/hab-add/hab-add.component';
import { HabHysComponent } from './components/habilidades/hab-hys.component';
import { ProyectAddComponent } from './components/proyectos/proyect-add/proyect-add.component';
import { ProyectEditComponent } from './components/proyectos/proyect-edit/proyect-edit.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


import { EduEditComponent } from './components/curriculum/educacion/edu-edit/edu-edit.component';
import { CVEditComponent } from './components/curriculum/cv-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AcercadeComponent,
    CurriculumComponent,
    LoginComponent,
    ProyectosComponent,
    PortafolioComponent,
    BannerComponent,
    FooterComponent,
    ExperienciaComponent,
    EducacionComponent,
    ExpAddComponent,
    ExpEditComponent,
    EduAddComponent,
    PersonaComponent,
    PersonaEditComponent,
    HabEditComponent,
    HabAddComponent,
    HabHysComponent,
    ProyectAddComponent,
    ProyectEditComponent,
    EduEditComponent,
    CVEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
