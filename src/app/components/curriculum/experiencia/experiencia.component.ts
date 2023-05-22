import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  exp: Experiencia[] = [];

  constructor(private serExperiencia: ExperienciaService , private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.serExperiencia.lista().subscribe(data => {
      this.exp = data
    });
  }

  Borrar(id?: number) {
    if(id != undefined) {
      this.serExperiencia.delete(id).subscribe(data => {
        this.cargarExperiencia();
        alert("Experiencia eliminada");
      }, err =>{
        alert("Error al eliminar Experiencia");
      });
    }
  }
}
