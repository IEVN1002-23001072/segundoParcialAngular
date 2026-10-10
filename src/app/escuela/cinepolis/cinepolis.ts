import { Component, OnInit } from '@angular/core';
import { ICinepolito } from '../cinepolito';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  imports: [ReactiveFormsModule, FormsModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis implements OnInit {
  formulario!:FormGroup

  compra:ICinepolito[]=[]
  nuevaCompra: ICinepolito={
    boletos:0,
    nombre:'',
    compradores:0,
    tarjeta:'',
    total:0,
  }
  ngOnInit(): void{
    
    this.formulario = new FormGroup({
      boletos: new FormControl(),
      nombre: new FormControl(''),
      compradores: new FormControl(),
      tarjeta: new FormControl(''),
    })
  }
    muestraCompra():void{
    this.nuevaCompra.boletos = this.formulario.value.boletos
    this.nuevaCompra.nombre = this.formulario.value.nombre
    this.nuevaCompra.compradores = this.formulario.value.compradores
    this.nuevaCompra.tarjeta = this.formulario.value.tarjeta


    let totalPagar = this.nuevaCompra.boletos * 12;


    if(this.nuevaCompra.boletos <= this.nuevaCompra.compradores * 7){
      
      if(this.nuevaCompra.boletos > 5){
        totalPagar = totalPagar - (totalPagar * 0.15); 
        if(this.nuevaCompra.tarjeta == 'si'){
          totalPagar = totalPagar - (totalPagar * 0.10)
        }
        this.nuevaCompra.total = totalPagar;
      }
      else if((this.nuevaCompra.boletos >= 3 && this.nuevaCompra.boletos <= 5)){
        totalPagar = totalPagar - (totalPagar * 0.10)
        if (this.nuevaCompra.tarjeta == 'si'){
          totalPagar = totalPagar - (totalPagar * 0.10)
        }
        this.nuevaCompra.total = totalPagar;
      }
      else{
        totalPagar = totalPagar
        if (this.nuevaCompra.tarjeta == 'si'){
          totalPagar = totalPagar - (totalPagar * 0.10)
        }
        this.nuevaCompra.total = totalPagar; 
      }
    }
    else {
      alert("No puedes comprar mas de 7 boletos por persona")
    }
    }
}
