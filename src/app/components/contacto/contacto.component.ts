import { Component, OnInit, Renderer2} from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  persona: Persona = { nombre: '', apellido: '', titulo: '', descripcion: '', imgBanner: '', imgPerfil: '', curriculum: '', mail:''};
  isLogged = false;

  constructor(public personaService: PersonaService, private tokenService: TokenService, private renderer: Renderer2){}

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
  enviarFormulario(): void {
    const url = `https://formsubmit.co/${this.persona.mail}`;
    window.location.href = url;
  }
}