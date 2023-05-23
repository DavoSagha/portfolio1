/* import { Component, OnInit } from '@angular/core';
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
} */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-proyect-edit',
  templateUrl: './proyect-edit.component.html',
  styleUrls: ['./proyect-edit.component.css']
})
export class ProyectEditComponent implements OnInit {
  proy: Proyecto = null;
  fileToUpload: File = null;

  constructor(
    private serProyecto: ProyectoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serProyecto.detail(id).subscribe(
      (data) => {
        this.proy = data;
      },
      (err) => {
        alert('Error editor Proyecto');
        this.router.navigate(['']);
      }
    );
  }

  Editar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    
    if (this.fileToUpload) {
      // Subir la nueva imagen al servidor
      this.serProyecto.uploadImage(id, this.fileToUpload).subscribe(
        (imageUrl) => {
          // Actualizar la URL de la imagen en el proyecto
          this.proy.imgPro = imageUrl;
          // Actualizar el proyecto en la base de datos
          this.updateProyecto(id);
        },
        (err) => {
          alert('Error al subir la imagen');
          this.router.navigate(['']);
        }
      );
    } else {
      // No se seleccionó una nueva imagen, solo actualizar el proyecto en la base de datos
      this.updateProyecto(id);
    }
  }

  updateProyecto(id: number): void {
    this.serProyecto.update(id, this.proy).subscribe(
      (data) => {
        alert('Proyecto editado');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al editar Proyecto');
        this.router.navigate(['']);
      }
    );
  }

  onFileChange(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const proyectoId = this.activatedRoute.snapshot.params['id'];
      const filePath = `proyectos-imagenes/${proyectoId}/${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
  
      // Obtener el estado de carga de la imagen
      task.snapshotChanges()
        .pipe(
          finalize(() => {
            // Obtener la URL de descarga de la imagen desde Firebase
            fileRef.getDownloadURL().subscribe(url => {
              // Asignar la URL de descarga al objeto "proy" en tu componente
              this.proy.imgPro = url;
            });
          })
        )
        .subscribe();
    }
  }
}
