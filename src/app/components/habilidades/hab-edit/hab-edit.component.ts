import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-hab-edit',
  templateUrl: './hab-edit.component.html',
  styleUrls: ['./hab-edit.component.css']
})
export class HabEditComponent implements OnInit{
  hab: Habilidad = null;

  constructor (private serHabilidad: HabilidadService, private activatedRoute: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.serHabilidad.detail(id).subscribe(data => {
        this.hab = data
      }, err => {
        alert("Error editor Habilidad");
        this.router.navigate(['']);
      });
    }

    Editar(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.serHabilidad.update(id, this.hab).subscribe(data => {
        alert("Habilidad editada");
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar Habilidad");
        this.router.navigate(['']);
      });
    }
}
