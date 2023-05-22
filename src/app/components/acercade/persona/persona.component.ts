
import { Component, OnInit, Renderer2} from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{
  persona: Persona = { nombre: '', apellido: '', titulo: '', descripcion: '', imgBanner: '', imgPerfil: '', curriculum: ''};
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

  copyUrlToClipboard() {
    const url = window.location.href;
    const input = this.renderer.createElement('input');
    input.value = url;
    this.renderer.appendChild(document.body, input);
    input.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, input);
    alert('La URL se ha copiado al portapapeles');
  }
}