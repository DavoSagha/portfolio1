import { Component } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyect: Proyecto[] = [];

  constructor(private serProyecto: ProyectoService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.serProyecto.lista().subscribe(data => {
      this.proyect = data
    });
  }

  Borrar(id?: number) {
    if(id != undefined) {
      this.serProyecto.delete(id).subscribe(data => {
        this.cargarProyecto();
        alert("Proyecto eliminado");
      }, err =>{
        alert("Error al eliminar Proyecto");
      });
    }
  }
}
