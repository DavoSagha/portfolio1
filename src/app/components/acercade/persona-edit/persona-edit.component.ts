import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { PersonaService } from 'src/app/services/persona.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit{
  persona: Persona = null;

  constructor (private serPersona: PersonaService, private activatedRouted: ActivatedRoute,
    public imgService: ImagenesService, private router: Router, private storage: AngularFireStorage) {}

  ngOnInit(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.serPersona.detail(id).subscribe(data => {
      this.persona = data
    }, err => {
      alert("Error");
      this.router.navigate(['']);
    });
  }

  Editar(): void {
    const id = this.activatedRouted.snapshot.params['id'];
    this.persona.imgPerfil = this.imgService.urlimg;
    this.serPersona.update(id, this.persona).subscribe(data =>{
      alert("Editado correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar Persona");
      this.router.navigate(['']);
    });
  }

  subirImg($event:any) {
    const id = this.activatedRouted.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imgService.subirImg($event, name);
  }

  subirImgB($event:any) {
    const id = this.activatedRouted.snapshot.params['id'];
    const name = "banner_" + id;
    this.imgService.subirImgB($event, name);
  }

   onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `perfiles-imagenes/${file.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      // Obtener el estado de carga de la imagen
      task.snapshotChanges()
        .pipe(
          finalize(() => {
            // Obtener la URL de descarga de la imagen desde Firebase
            fileRef.getDownloadURL().subscribe(url => {
              // Guardar la URL completa en la propiedad imgBanner
              this.persona.imgBanner = url;
            });
          })
        )
        .subscribe();
    }
  }

}
