import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit{
  persona: Persona = { nombre: '', apellido: '', titulo: '', descripcion: '', imgBanner: '', imgPerfil: '', curriculum: ''};
  isLogged = false;

  constructor(public personaService: PersonaService, private tokenService: TokenService){}

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {
      this.persona = data
    });
  }

}