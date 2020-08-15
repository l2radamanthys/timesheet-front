import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClientesService } from './clientes.service';
import { TareasService } from './tareas.service';
import { ProyectosService } from './proyectos.service';
import { TareasProyectosService } from './tareas-proyectos.service';
import { UsersService } from './users.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ClientesService,
    TareasService,
    ProyectosService,
    TareasProyectosService,
    UsersService
  ]
})
export class ServicesModule { }
