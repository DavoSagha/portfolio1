import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-hab-add',
  templateUrl: './hab-add.component.html',
  styleUrls: ['./hab-add.component.css']
})
export class HabAddComponent implements OnInit{

  nombreHys: string = '';
  iconoHys: string = '';
  porcentaje: number = null;

  constructor (private serHabilidad: HabilidadService, private router: Router) {}

  ngOnInit(): void {
    
  }

  Crear(): void {
    const hab = new Habilidad(this.nombreHys, this.iconoHys, this.porcentaje);
    this.serHabilidad.save(hab).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Error al añadir Habilidad");
      this.router.navigate(['']);
    });
  }
}
