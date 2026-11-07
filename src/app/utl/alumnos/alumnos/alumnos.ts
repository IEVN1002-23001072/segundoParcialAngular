
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlumnosFilterPipe } from '../alumnos-filter.pipe';
import { ProyectoapiService } from '../proyectoapi.service';
import { AlumnosUtl } from '../alumnos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,AlumnosFilterPipe],
  templateUrl: './alumnos.html',
})

export class Alumnos {
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImage: boolean = true;
  listFilter: string = '';
  alumnoTitle!:string
  dataSource:any=[];

  constructor(public alumnosUtl:ProyectoapiService){}

  

  alumnosIric: AlumnosUtl[] = [
    {
      matricula: 1,
      nombre: 'pedro',
      apaterno: 'lopez',
      amaterno: 'munoz',
      correo: 'pedro@gmail.com'
    }
  ];

  ngOnInit(): void {
    this.alumnosUtl.getAlumnos().subscribe(
      {
        next: response=>{
          this.dataSource=response;
        },
        error: error=>console.log(error)
      }
    )
    
  }
}
