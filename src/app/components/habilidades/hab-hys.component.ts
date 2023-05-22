import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-hab-hys',
  templateUrl: './hab-hys.component.html',
  styleUrls: ['./hab-hys.component.css']
})
export class HabHysComponent implements OnInit{
  hab: Habilidad[] = [];

  constructor (private serHabilidad: HabilidadService, private tokenService: TokenService){}
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.serHabilidad.lista().subscribe(data => {
      this.hab = data
    });
  }

  Borrar(id?: number) {
    if(id != undefined) {
      this.serHabilidad.delete(id).subscribe(data => {
        this.cargarHabilidad();
        alert("Habilidad eliminada");
      }, err =>{
        alert("Error al eliminar Habilidad");
      });
    }
  }
}
