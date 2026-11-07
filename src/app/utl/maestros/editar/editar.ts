import { MaestrosUtl } from './../maestros';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
 
import { Router, RouterLink } from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  imports: [ReactiveFormsModule,RouterLink],
  selector: 'app-editar',
  templateUrl: './editar.html',
})
export class Editar implements OnInit {
  formulario!:FormGroup;
 matricula: string = '';
 
  constructor(private route: ActivatedRoute,
     public maestrosUtl:ProyectoapiService,
    public fb:FormBuilder,   public router: Router
) {}
 
  ngOnInit(): void {
 
    this.formulario=this.fb.group({
      matricula: [''],
      nombre: [''],
      apaterno: [''],
      amaterno: [''],
      correo: ['']
    })
 
        this.matricula =
      this.route.snapshot.paramMap.get('matricula') || '';
 
    this.maestrosUtl.getMaestro(this.matricula).subscribe({
      next:(response)=>{
        //if (response.exito && response.MaestrosUtl){
          this.formulario.patchValue(response.maestro)
        //}
      },
      error: (error) => {
        console.error('Error al consultar el maestro:', error);
      }
 
    })
   
  }
 
 onSubmit(): void {
 
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
 
    // Obtener los valores del formulario
    const maestro = this.formulario.getRawValue();
 
    this.maestrosUtl.modificarMaestro(parseInt(this.matricula), maestro).subscribe({
 
      next: (response) => {
 
        if (response) {
 
          alert('Maestro actualizado correctamente');
 
          // Regresar a la tabla
          this.router.navigate(['/utl/maestros']);
 
        } else {
          alert('No se pudo actualizar el maestro');
        }
 
      },
 
      error: (error) => {
        console.error('Error al actualizar:', error);
        alert('Ocurrió un error al actualizar el alumno');
      }
 
    });
 
  }
 
}