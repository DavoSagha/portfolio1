import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-exp-edit',
  templateUrl: './exp-edit.component.html',
  styleUrls: ['./exp-edit.component.css']
})
export class ExpEditComponent implements OnInit{

  exp: Experiencia = null;

  constructor (private serExperiencia: ExperienciaService, private activatedRoute: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serExperiencia.detail(id).subscribe(data => {
      this.exp = data
    }, err => {
      alert("Error editor Experiencia");
      this.router.navigate(['']);
    });
  }

  Editar(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.serExperiencia.update(id, this.exp).subscribe(data => {
      alert("Experiencia editada");
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar experiencia");
      this.router.navigate(['']);
    });
  }

}
