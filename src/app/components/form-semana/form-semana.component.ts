import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TareasProyectosService } from 'src/app/services/tareas-proyectos.service';
import { TareasService } from 'src/app/services/tareas.service';
import { UsersService } from 'src/app/services/users.service';
import * as moment from 'moment';
// import 'moment/locale/es-ar';


const NOMBRE_DIAS = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
];


@Component({
  selector: 'app-form-semana',
  templateUrl: './form-semana.component.html',
  styleUrls: ['./form-semana.component.scss']
})
export class FormSemanaComponent implements OnInit {
  public users: any[];
  public proyectos: any[];
  public tareas: any[];
  public user: any;
  public proyecto: number;
  public tarea: number;
  public tareasUsuario: any[];
  public listaTareas: any[];
  public fechaPivote: any;
  public mostrarModal: boolean;

  constructor(
    private usersService: UsersService,
    private tareasService: TareasService,
    private proyectosService: ProyectosService,
    private tareasProyectosService: TareasProyectosService
  ) {
    this.users = [];
    this.tareas = [];
    this.proyectos = [];
    this.tareasUsuario = [];
    this.listaTareas = [];
    this.user = null;
    this.tarea = null;
    this.proyecto = null;
    this.fechaPivote = moment();
    this.mostrarModal = false;
  }

  ngOnInit() {
    forkJoin(
      this.usersService.all(),
      this.proyectosService.all(),
      this.tareasService.all()
    ).subscribe(([
      users,
      proyectos,
      tareas
    ]) => {
      this.users = users;
      this.tareas = tareas;
      this.proyectos = proyectos;
    });

    this.calcularPeriodo();
    /* */
  }

  calcularPeriodo() {
    this.tareasUsuario = [{}, {}];
    const diaSemana = this.fechaPivote.weekday();
    for (let i = diaSemana; i >= 0; i--) {
      const dia = this.fechaPivote.clone().subtract(i, 'day');
      this.tareasUsuario.push({
        fecha: dia,
        nombre: NOMBRE_DIAS[dia.weekday()],
      });
    }

    for (let j = diaSemana + 1; j < 7; j++) {
      const dia = this.fechaPivote.clone().add(j - diaSemana, 'day');
      this.tareasUsuario.push({
        fecha: dia,
        nombre: NOMBRE_DIAS[dia.weekday()],
      });
    }
  }

  agregarTarea() {
    if (this.proyecto && this.tarea) {
      const tpkey = `${this.proyecto}-${this.tarea}`;
      if (this.listaTareas.indexOf(tpkey)) {
        const proyecto = this.proyectos.find(p => p.id === this.proyecto);
        const tarea = this.tareas.find(t => t.id === this.tarea);
        this.listaTareas.push(tpkey);
        this.tareasUsuario[0][tpkey] = proyecto.nombre;
        this.tareasUsuario[1][tpkey] = tarea.nombre;
        this.tareasUsuario.forEach((tu, idx) => {
          if (idx > 1) {
            tu[tpkey] = 0;
          }
        });

        // console.log(JSON.stringify(this.tareasUsuario, null, '  '));
        this.tarea = null;
        this.proyecto = null;
        this.mostrarModal = false;
      }
    }
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  guardar() {

  }
}
