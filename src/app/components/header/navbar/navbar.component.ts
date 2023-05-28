import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLogged = false;
  isNavbarCollapsed = true;
  activePage: string = '';
  Inicio: boolean = true;
  persona: Persona = { nombre: '', apellido: '', titulo: '', descripcion: '', imgBanner: '', imgPerfil: '', curriculum: '',mail:''};

  constructor(private router:Router,public personaService: PersonaService, private tokenService: TokenService) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else
      this.isLogged = false;
  }
  
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/ingreso'])
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {
      this.persona = data
    });
  }
}
