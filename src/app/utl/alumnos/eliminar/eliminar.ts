import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';

@Component({
  imports: [RouterLink],
  selector: 'app-eliminar',
  templateUrl: './eliminar.html',
})
export class Eliminar implements OnInit {

  matricula: string = '';

  alumno: any = {};

  constructor(
    private route: ActivatedRoute,
    public alumnosUtl: ProyectoapiService,
    public router: Router
  ) {}

  ngOnInit(): void {

    this.matricula =
      this.route.snapshot.paramMap.get('matricula') || '';

    this.alumnosUtl.getAlumno(this.matricula).subscribe({

      next: (response) => {

        this.alumno = response.alumno;

      },

      error: (error) => {
        console.error('Error al consultar el alumno:', error);
      }

    });

  }

  eliminarAlumno(): void {

    this.alumnosUtl.EliminaAlumno(parseInt(this.matricula)).subscribe({

      next: (response) => {

        if (response) {

          alert('Alumno eliminado correctamente');

          this.router.navigate(['/utl/alumnos']);

        } else {

          alert('No se pudo eliminar el alumno');

        }

      },

      error: (error) => {

        console.error('Error al eliminar:', error);

        alert('Ocurrió un error al eliminar el alumno');

      }

    });

  }

}