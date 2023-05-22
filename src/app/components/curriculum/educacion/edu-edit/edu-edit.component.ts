import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edu-edit',
  templateUrl: './edu-edit.component.html',
  styleUrls: ['./edu-edit.component.css']
})
export class EduEditComponent implements OnInit{

  edu: Educacion = null;

  constructor (private serEducacion: EducacionService, private activatedRoute: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serEducacion.detail(id).subscribe(data => {
      this.edu = data
    }, err => {
      alert("Error editor Educación");
      this.router.navigate(['']);
    });
  }

  Editar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serEducacion.update(id, this.edu).subscribe(data => {
      alert("Educación editada");
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar Educación");
      this.router.navigate(['']);
    });
  }

}
