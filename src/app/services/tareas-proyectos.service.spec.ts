import { TestBed } from '@angular/core/testing';

import { TareasProyectosService } from './tareas-proyectos.service';

describe('TareasProyectosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TareasProyectosService = TestBed.get(TareasProyectosService);
    expect(service).toBeTruthy();
  });
});
