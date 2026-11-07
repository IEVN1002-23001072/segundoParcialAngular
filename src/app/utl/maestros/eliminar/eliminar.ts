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

  maestro: any = {};

  constructor(
    private route: ActivatedRoute,
    public maestrosUtl: ProyectoapiService,
    public router: Router
  ) {}

  ngOnInit(): void {

    this.matricula =
      this.route.snapshot.paramMap.get('matricula') || '';

    this.maestrosUtl.getMaestro(this.matricula).subscribe({

      next: (response) => {

        this.maestro = response.maestro;

      },

      error: (error) => {
        console.error('Error al consultar el maestro:', error);
      }

    });

  }

  eliminarMaestro(): void {

    this.maestrosUtl.EliminaMaestro(parseInt(this.matricula)).subscribe({

      next: (response) => {

        if (response) {

          alert('Maestro eliminado correctamente');

          this.router.navigate(['/utl/maestros']);

        } else {

          alert('No se pudo eliminar el maestro');

        }

      },

      error: (error) => {

        console.error('Error al eliminar:', error);

        alert('Ocurrió un error al eliminar el alumno');

      }

    });

  }

}