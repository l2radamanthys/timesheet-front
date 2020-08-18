import * as moment from 'moment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ProyectosService } from 'src/app/services/proyectos.service';
import { TareasProyectosService } from 'src/app/services/tareas-proyectos.service';
import { TareasService } from 'src/app/services/tareas.service';
import { UsersService } from 'src/app/services/users.service';
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
  @BlockUI() blockUI: NgBlockUI;
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
    this.blockUI.start();
    this.tareasUsuario = [{}, {}];
    this.listaTareas = [];
    let listaFechas = [];
    const diaSemana = this.fechaPivote.weekday();
    for (let i = diaSemana; i >= 0; i--) {
      const dia = this.fechaPivote.clone().subtract(i, 'day');
      this.tareasUsuario.push({
        fecha: dia,
        nombre: NOMBRE_DIAS[dia.weekday()],
        total: 0,
      });
      listaFechas.push(dia.format('YYYY-MM-DD'));
    }

    for (let j = diaSemana + 1; j < 7; j++) {
      const dia = this.fechaPivote.clone().add(j - diaSemana, 'day');
      this.tareasUsuario.push({
        fecha: dia,
        nombre: NOMBRE_DIAS[dia.weekday()],
        total: 0,
      });
      listaFechas.push(dia.format('YYYY-MM-DD'));
    }
    this.tareasUsuario.push({ total: 0 }); // total

    if (this.user) {
      this.tareasProyectosService.query({
        desde: this.tareasUsuario[2].fecha.format('YYYY-MM-DD'),
        hasta: this.tareasUsuario[8].fecha.format('YYYY-MM-DD'),
        user_id: this.user,
      }).subscribe(tareasProyecto => {
        tareasProyecto.forEach(tp => {
          const tpkey = `${tp.proyecto}-${tp.tarea}`;
          if (this.listaTareas.indexOf(tpkey) === -1) {
            const proyecto = this.proyectos.find(p => p.id === tp.proyecto);
            const tarea = this.tareas.find(t => t.id === tp.tarea);
            this.listaTareas.push(tpkey);
            this.tareasUsuario[0][tpkey] = proyecto.nombre;
            this.tareasUsuario[1][tpkey] = tarea.nombre;
            this.tareasUsuario.forEach((tu, idx) => {
              if (idx > 1) {
                tu[tpkey] = 0;
              }
            });
          }
          // const tid = this.listaTareas.indexOf(tpkey);
          const fid = listaFechas.indexOf(tp.fecha) + 2;
          this.tareasUsuario[fid][tpkey] = tp.horas;
          this.tareasUsuario[fid].total += tp.horas;
          this.tareasUsuario[9][tpkey] += tp.horas;
          this.tareasUsuario[9].total += tp.horas;
        });
        this.blockUI.stop();
      });
    } else {
      this.blockUI.stop();
    }
  }

  moverFechaPivote(dias) {
    this.fechaPivote.add(dias, 'day');
    this.calcularPeriodo();
  }

  cuandoCambiaUser(event) {
    // console.log("x", event, this.user);
    this.calcularPeriodo();
  }

  agregarTarea() {
    if (this.proyecto && this.tarea) {
      const tpkey = `${this.proyecto}-${this.tarea}`;
      if (this.listaTareas.indexOf(tpkey) === -1) {
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
    // this.mostrarModal = true;
    this.blockUI.start();
  }

  guardar() {
    this.blockUI.start();
    // console.log(JSON.stringify(this.tareasUsuario, null, '  '));
    let tareas = [];
    this.tareasUsuario.forEach((tu, idx) => {
      if (idx > 1 && idx !== 9) {
        const fecha = moment(tu.fecha).format('YYYY-MM-DD');
        Object.keys(tu).forEach(key_ => {
          // console.log(key_)
          if (key_ !== 'fecha' && key_ !== 'nombre'  && key_ !== 'total') {
            const pd = key_.split('-');
            tareas.push({
              fecha: fecha,
              user_id: this.user,
              proyecto_id: pd[0],
              tarea_id: pd[1],
              horas: tu[key_]
            });
          }
        });
      }
    });

    this.tareasProyectosService.actualizar({
      tareas: JSON.stringify(tareas)
    }).subscribe(response => {
      this.blockUI.stop();
      this.calcularPeriodo();
    });
  }
}
