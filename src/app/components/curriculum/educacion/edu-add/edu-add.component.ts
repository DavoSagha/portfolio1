import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edu-add',
  templateUrl: './edu-add.component.html',
  styleUrls: ['./edu-add.component.css']
})
export class EduAddComponent implements OnInit{

  tituloEdu: string = '';
  instiEdu: string = '';
  fechaEdu: string = '';
  imgEdu: string = '';
  descripcionEdu: string = '';

  constructor (private serEducacion: EducacionService, private router: Router) {}

  ngOnInit(): void {
    
  }

  Crear(): void {
    const edu = new Educacion(this.tituloEdu, this.instiEdu, this.fechaEdu, this.imgEdu, this.descripcionEdu);
    this.serEducacion.save(edu).subscribe(data => {
      alert("Educacion añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló al añadir");
      this.router.navigate(['']);
    });
  }

}
