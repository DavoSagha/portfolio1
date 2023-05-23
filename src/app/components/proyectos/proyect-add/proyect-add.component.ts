 import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
//import { ImagenesService } from 'src/app/services/imagenes.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

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

  constructor(private serProyecto: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router, private storage: AngularFireStorage) {} //, public imgService: ImagenesService) {}

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

  onFileChange(event: any) {
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
              // Guardar la URL completa en la propiedad de imagen del proyecto
              this.imgPro = url;
              // Luego puedes llamar al método "Crear()" para guardar el proyecto
              this.Crear();
            });
          })
        )
        .subscribe();
    }
  }


  

  // subirImg($event:any) {
  //   const id = this.activatedRoute.snapshot.params['id'];
  //   const name = "Proyecto_" + id;
  //   this.imgService.subirImg($event, name);
  // }
}
 

/* import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

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

  constructor(private serProyecto: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router, private storage: AngularFireStorage) {}

  ngOnInit(): void {
    
  }

  Crear(): void {
    const proy = new Proyecto(this.nombrePro, this.autorPro, this.descripcionPro, this.imgPro, this.urlLive, this.urlRepo);
    this.serProyecto.save(proy).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Error al añadir Proyecto");
      this.router.navigate(['']);
    });
  }

  onFileChange(event: any) {
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
              // Asigna la URL de descarga directamente a imgPro
              this.imgPro = url;
              // Llama al método "Crear()" para guardar el proyecto
              this.Crear();
            });
          })
        )
        .subscribe();
    }
  }
}
 */
