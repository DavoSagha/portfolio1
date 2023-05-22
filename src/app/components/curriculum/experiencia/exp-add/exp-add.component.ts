import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-exp-add',
  templateUrl: './exp-add.component.html',
  styleUrls: ['./exp-add.component.css']
})
export class ExpAddComponent implements OnInit{

  cargoExp: string = '';
  empresaExp: string = '';
  fechaExp: string = '';
  descripcionExp: string = '';

  constructor (private serExperiencia: ExperienciaService, private router: Router) {}

  ngOnInit(): void {
    
  }

  Crear(): void {
    const exp = new Experiencia(this.cargoExp, this.empresaExp, this.fechaExp, this.descripcionExp);
    this.serExperiencia.save(exp).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Error al añadir Experiencia");
      this.router.navigate(['']);
    });
  }
}
