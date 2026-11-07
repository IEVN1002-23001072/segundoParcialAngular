
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaestrosFilterPipe } from '../maestros-filter.pipe';
import { ProyectoapiService } from '../proyectoapi.service';
import { MaestrosUtl } from '../maestros';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maestros',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule,MaestrosFilterPipe],
  templateUrl: './maestros.html',
})

export class Maestros {
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImage: boolean = true;
  listFilter: string = '';
  alumnoTitle!:string
  dataSource:any=[];

  constructor(public maestrosUtl:ProyectoapiService){}

  

  maestrosIric: MaestrosUtl[] = [
    {
      matricula: 1,
      nombre: 'pedro',
      apaterno: 'lopez',
      amaterno: 'munoz',
      correo: 'pedro@gmail.com'
    }
  ];

  ngOnInit(): void {
    this.maestrosUtl.getMaestros().subscribe(
      {
        next: response=>{
          this.dataSource=response;
        },
        error: error=>console.log(error)
      }
    )
    
  }
}
