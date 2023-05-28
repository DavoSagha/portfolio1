import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-mail-edit',
  templateUrl: './mail-edit.component.html',
  styleUrls: ['./mail-edit.component.css']
})
export class MailEditComponent implements OnInit{
  persona: Persona = null;

  constructor (private serPersona: PersonaService, private activatedRouted: ActivatedRoute, private router: Router) {}

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
    this.serPersona.update(id, this.persona).subscribe(data =>{
      alert("Editado correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al editar Persona");
      this.router.navigate(['']);
    });
  }
}
