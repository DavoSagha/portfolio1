import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
//import { ImagenesService } from 'src/app/services/imagenes.service';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyect-add',
  templateUrl: './proyect-add.component.html',
  styleUrls: ['./proyect-add.component.css']
})
export class ProyectAddComponent {

  nombrePro: string = '';
  autorPro: string = '';
  descripcionPro: string = '';
  imgPro: string = '';
  urlLive: string = '';
  urlRepo: string = '';

  constructor(private serProyecto: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) {} //, public imgService: ImagenesService) {}

  ngOnInit(): void {
    
  }

  Crear(): void {
    const proy = new Proyecto(this.nombrePro, this.autorPro, this.descripcionPro, this.imgPro, this.urlLive, this.urlRepo);
    //this.imgPro = this.imgService.urlimg;
    this.serProyecto.save(proy).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Error al añadir Proyecto");
      this.router.navigate(['']);
    });
  }

  // subirImg($event:any) {
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   const name = "Proyecto_" + id;
  //   this.imgService.subirImg($event, name);
  // }
}
