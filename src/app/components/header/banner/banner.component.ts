import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  persona: Persona = null;
  Banner: string;
  
  isLogged = false;

  constructor (public personaService: PersonaService, private tokenService: TokenService, private http: HttpClient) {}

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

  /*   cargarPersona() {
    this.personaService.detail(1).subscribe(data => {
      this.persona = data;
  
      // Cargar la imagen del banner al almacenamiento de Firebase
      const bannerRef = this.storage.ref(`imagen/${this.persona.imgBanner}`);
      this.storage.upload(`imagen/${this.persona.imgBanner}`, this.persona.imgBanner).then(() => {
        // Obtener la URL de descarga de la imagen del banner desde Firebase
        bannerRef.getDownloadURL().subscribe(url => {
          this.Banner = `linear-gradient(rgb(1, 0, 12, 0.5), rgba(1, 0, 12, 0.5)), url(${url})`;
  
          // Guardar la URL de la imagen del banner en tu base de datos
          // Aquí deberás utilizar tu servicio o método adecuado para guardar la URL en la base de datos
        });
      });
    });
  } */
}