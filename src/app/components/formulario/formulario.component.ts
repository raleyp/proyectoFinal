import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public descripcion: string; //Mantiene la descripcion de la tarea
  public usuario: string;

  constructor(private tareaSvc: PrincipalService) { }

  ngOnInit(): void {
  }

  // Este metodo se ejecuta cada vez que el usuario hace click en el boton
  procesar(): void {
    // console.log(this.descripcion);
    // UNDEFINED "VALOR" ""

    if (this.descripcion && this.descripcion !== '') {
      console.log(this.descripcion);
      const tarea = new Tarea();
      tarea.usuario = this.usuario;
      tarea.descripcion = this.descripcion;
      tarea.fecha = new Date();
      this.tareaSvc.tareas.push(tarea);
      console.log(tarea);
    }
  }

}
