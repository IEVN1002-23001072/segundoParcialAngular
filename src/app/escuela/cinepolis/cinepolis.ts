import { Component, OnInit } from '@angular/core';
import { ICinepolito } from '../cinepolito';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'

@Component({
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterLink],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis implements OnInit {
  formulario!:FormGroup

  compra:ICinepolito[]=[]
  indiceEdicion:number=-1

  nuevaCompra: ICinepolito={
    boletos:0,
    nombre:'',
    compradores:0,
    tarjeta:'',
    total:0,
  }
  ngOnInit(): void{
    this.cargarCompra();
    this.formulario = new FormGroup({
      boletos: new FormControl(0),
      nombre: new FormControl(''),
      compradores: new FormControl(0),
      tarjeta: new FormControl(''),
    })
  }

  agregarVenta():void{
    if(
      this.nuevaCompra.boletos === 0 ||
      this.nuevaCompra.nombre === ''||
      this.nuevaCompra.compradores === 0 ||
      this.nuevaCompra.tarjeta === ''
    ){
      alert('Todos los campos son obligatorios');
      return;
    }
    if(this.indiceEdicion !== -1){
      this.compra[this.indiceEdicion]={
        ...this.nuevaCompra
      }
    }else{
      this.compra.push({...this.nuevaCompra})
    }

    localStorage.setItem(
      'compra',
      JSON.stringify(this.compra)
    ) 
    /* this.limpiarCampos() */

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
    this.agregarVenta();
    }

    cargarCompra():void{
    const datos = localStorage.getItem('compra');

    if (datos){
      this.compra = JSON.parse(datos);
    }
  }

editarCompra(index:number):void{
    this.nuevaCompra={
      ...this.compra[index]
    }
    const compra =this.compra[index]
    this.formulario.patchValue({
      boletos: compra.boletos,
      nombre: compra.nombre,
      compradores: compra.compradores,
      tarjeta: compra.tarjeta,
    })

    this.indiceEdicion=index
  }

eliminarCompra(index: number): void{
    this.compra.splice(index,1)
    localStorage.setItem(
      'compra',
      JSON.stringify(this.compra)
    )
  }

/* limpiarCampos():void{
    this.nuevaCompra = {
      boletos:0 ,
      nombre: '',
      compradores:0,
      tarjeta: '',
      total:0,
    }
    this.formulario.patchValue({
      boletos: this.nuevaCompra.boletos,
      nombre: this.nuevaCompra.nombre,
      compradores: this.nuevaCompra.compradores,
      tarjeta: this.nuevaCompra.tarjeta,
    })
    this.indiceEdicion=-1
  } */



}


