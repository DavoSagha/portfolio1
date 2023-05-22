import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  urlarch: string = '';

  constructor(private storage: Storage) { }

  public subirArch($event:any, name:string) {
    if ($event.target && $event.target.files && typeof $event.target.files[0] !== 'undefined') {
      const archivo = $event.target.files[0];
      const archRef = ref(this.storage, `archivo/` + name);
      uploadBytes(archRef, archivo)
      .then(response => {this.getArchivo()})
      .catch(error => console.log(error))
    }
  }
  
  getArchivo() {
    const archivosRef = ref(this.storage, 'archivo')
    list(archivosRef)
    .then(async response => {
      for(let item of response.items) {
        this.urlarch = await getDownloadURL (item);
      }
    })
    .catch(error => console.log(error))
  }
}