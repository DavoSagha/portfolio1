import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  urlimg: string = '';

  constructor(private storage: Storage) { }

  public subirImg($event:any, name:string) {
    if ($event.target && $event.target.files && typeof $event.target.files[0] !== 'undefined') {
      const file = $event.target.files[0];
      const imgRef = ref(this.storage, `imagen/` + name);
      uploadBytes(imgRef, file)
      .then(response => {this.getImagen()})
      .catch(error => console.log(error))
    }
  }

  public subirImgB($event:any, name:string) {
    if ($event.target && $event.target.files && typeof $event.target.files[0] !== 'undefined') {
      const file = $event.target.files[0];
      const imgRef = ref(this.storage, `imagen/` + name);
      uploadBytes(imgRef, file)
      .then(response => {this.getImagen()})
      .catch(error => console.log(error))
    }
  }
  
  getImagen() {
    const imagenesRef = ref(this.storage, 'imagen')
    list(imagenesRef)
    .then(async response => {
      for(let item of response.items) {
        this.urlimg = await getDownloadURL (item);
      }
    })
    .catch(error => console.log(error))
  }

}