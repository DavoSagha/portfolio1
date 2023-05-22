import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
//import { ImagenesService } from 'src/app/services/imagenes.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyect-edit',
  templateUrl: './proyect-edit.component.html',
  styleUrls: ['./proyect-edit.component.css']
})
export class ProyectEditComponent implements OnInit{
  proy: Proyecto = null;

  constructor (private serProyecto: ProyectoService, private activatedRoute: ActivatedRoute,
    private router: Router) {}//, public imgService: ImagenesService) {}


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serProyecto.detail(id).subscribe(data => {
      this.proy = data
    }, err => {
      alert("Error editor Proyecto");
      this.router.navigate(['']);
    });
  }

  Editar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    //this.proy.imgPro = this.imgService.url;
    this.serProyecto.update(id, this.proy).subscribe(data => {
      alert("Proyecto editado");
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar Proyecto");
      this.router.navigate(['']);
    });
  }

  // subirImg($event:any) {
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   const name = "Proyecto_" + id;
  //   this.imgService.subirImg($event, name);
  // }
}