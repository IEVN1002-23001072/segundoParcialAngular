import { Component } from '@angular/core';
import { FormsModule } from  '@angular/forms'
@Component({
  imports: [FormsModule],
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  nombre:string=''
  amaterno:string=''
  apaterno:string=''
  dia:number=0
  mes:number=0
  ano:number=0
  genero:string=''
  ruta:string=''
  resultado:string=''
  edad:number=0
  anos:number=0
  nombrecompleto:string=''

  datos(){
    if((this.mes <= 10 && this.mes <=2)){
        this.anos = 2026-this.ano
    }else {
        this.anos = 2025-this.ano
    }
    
    if(this.ano%12 === 0){
      this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
      this.edad = 2026-this.ano 
      this.resultado = `tu signo es mono`
      this.ruta = 'https://tse1.mm.bing.net/th/id/OIP.VLuXPMo-aEyR1czBxnhzeQHaGu?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
    else if (this.ano%12 === 1){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano 
        this.resultado = `Tu signo es gallo`
        this.ruta = 'https://tse1.mm.bing.net/th/id/OIP.MAEv-3HcY2Ja-FwxV2m--wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
    else if (this.ano%12 === 2){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano 
        this.resultado = `tu signo es perro`
        this.ruta = 'https://th.bing.com/th/id/OIP.Al0eCymxy2tFTtxedAHevgHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
    }
    else if (this.ano%12 === 3){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es cerdo`
        this.ruta = 'https://th.bing.com/th/id/OIP._3UTMsJGZze5qDQAo1LQbQHaER?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
    else if (this.ano%12 === 4){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es rata`
        this.ruta = 'https://th.bing.com/th/id/OIP.kUcEEg8RcGlNoS3ZLD4uvAHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
    }
    else if (this.ano%12 === 5){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es buey`
        this.ruta = 'https://th.bing.com/th/id/OIP.-es8q0xBfw319RqmsFZnjwHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
    }
    else if (this.ano%12 === 6){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es tigre`
        this.ruta = 'https://th.bing.com/th/id/OIP.U8A-hPJ8ady5f6qHDEW_YQHaHa?w=194&h=194&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
    }
    else if (this.ano%12 === 7){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es conejo`
        this.ruta = 'https://th.bing.com/th/id/OIP.fj1egereGivdM4TXst91awHaHY?w=172&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
    }
    else if (this.ano%12 === 8){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es dragon`
        this.ruta = 'https://th.bing.com/th/id/OIP.fTzJ0TF68_2MxkKWtNF_0QHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
    else if (this.ano%12 === 9){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es serpiente`
        this.ruta = 'https://tse3.mm.bing.net/th/id/OIP.9PKPWXiPYM4ZYGMRGXfCsQHaHZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
    else if (this.ano%12 === 10){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es caballo`
        this.ruta = 'https://tse1.mm.bing.net/th/id/OIP.tQVU2ezmnGd1UVeI6gV4xwHaDp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
    else if (this.ano%12 === 11){
        this.nombrecompleto = `Hola ${this.nombre} ${this.apaterno} ${this.amaterno}`
        this.edad = 2026-this.ano
        this.resultado = `tu signo es cabra`
        this.ruta = 'https://tse3.mm.bing.net/th/id/OIP.f4v3rFaxTLr_tz4XsaUkbwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
    }
}}
