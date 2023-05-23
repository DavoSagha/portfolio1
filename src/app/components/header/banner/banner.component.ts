import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';




@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  persona: Persona = null;
  Banner: string;
  
  isLogged = false;

  constructor (public personaService: PersonaService, private tokenService: TokenService, private http: HttpClient, private storage: AngularFireStorage) {}

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
      //this.Banner = `url(${this.persona.imgBanner})`;
      this.Banner = `linear-gradient(rgb(1, 0, 12, 0.5), rgba(1, 0, 12, 0.5)), url(${this.persona.imgBanner})`;
    });
  }  

}