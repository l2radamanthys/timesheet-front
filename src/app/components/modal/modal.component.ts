import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() mostrar: boolean;
  @Input() contenedor: boolean;
  @Output() mostrarChange = new EventEmitter<boolean>();

  constructor() {
    this.mostrar = false;
    this.contenedor = true;
  }

  ngOnInit() {}

  cerrar() {
    this.mostrar = false;
    this.mostrarChange.emit(this.mostrar);
  }
}
