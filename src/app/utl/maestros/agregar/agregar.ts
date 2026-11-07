import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaestrosUtl } from '../maestros';
 
import { Router, RouterLink } from '@angular/router';
import { ProyectoapiService } from '../proyectoapi.service';
 
@Component({
  imports: [ReactiveFormsModule,RouterLink],
  selector: 'app-agregar',
 
  templateUrl: './agregar.html',
})
export class Agregar implements OnInit {
 formGroup!: FormGroup;
 
regMaestro: MaestrosUtl = {
  matricula: 0,
  nombre: '',
  apaterno: '',
  amaterno: '',
  correo: ''
};
 
constructor(
  private fb: FormBuilder,
  public maestrosutl: ProyectoapiService,
  private router: Router
) {}
 
ngOnInit(): void {
  this.formGroup = this.initForm();
}
 
 
initForm(): FormGroup {
  return this.fb.group({
    matricula: ['', Validators.required],
    nombre: ['', Validators.required],
    apaterno: ['', Validators.required],
    amaterno: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]]
  });
}
 
onSubmit(): void {
  if (this.formGroup.invalid) {
    console.log('El formulario contiene datos inválidos');
    return;
  }
 
  const datos: MaestrosUtl = {
  ...this.formGroup.getRawValue(),
  matricula: String(this.formGroup.get('matricula')?.value)
  };
 
  console.log('Datos que se enviarán:', datos);
 
  this.maestrosutl.agregarNuevoMaestro(datos).subscribe({
    next: (respuesta) => {
      console.log('Respuesta de Flask:', respuesta);
      alert('maestro registrado correctamente');
 
      this.formGroup.reset();
 
      this.router.navigate(['/utl/maestros']);
    },
    error: (error) => {
      console.error('Error al registrar maestro:', error);
 
      const mensaje =
        error.error?.mensaje ||
        error.error?.error ||
        error.message ||
        'Ocurrió un error al registrar el alumno';
 
      alert(mensaje);
    }
  });
}
 
}