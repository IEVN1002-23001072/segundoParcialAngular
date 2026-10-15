import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ICinepolito } from '../cinepolito';

@Component({
  selector: 'app-ver-registros',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './ver-registros.html',
  styleUrl: './ver-registros.css',
})
export class VerRegistros implements OnInit {
  formulario!: FormGroup;
  compra: ICinepolito[] = [];
  indiceEdicion: number = -1;

  nuevaCompra: ICinepolito = {
    boletos: 0,
    nombre: '',
    compradores: 0,
    tarjeta: '',
    total: 0,
  };

  ngOnInit(): void {
    this.cargarCompra();
    this.formulario = new FormGroup({
      boletos: new FormControl(0),
      nombre: new FormControl(''),
      compradores: new FormControl(0),
      tarjeta: new FormControl(''),
    });
  }

  cargarCompra(): void {
    const datos = localStorage.getItem('compra');
    if (datos) {
      this.compra = JSON.parse(datos);
    }
  }

  muestraCompra(): void {
    this.nuevaCompra.boletos = this.formulario.value.boletos;
    this.nuevaCompra.nombre = this.formulario.value.nombre;
    this.nuevaCompra.compradores = this.formulario.value.compradores;
    this.nuevaCompra.tarjeta = this.formulario.value.tarjeta;

    let totalPagar = this.nuevaCompra.boletos * 12;

    if (this.nuevaCompra.boletos <= this.nuevaCompra.compradores * 7) {
      if (this.nuevaCompra.boletos > 5) {
        totalPagar = totalPagar - totalPagar * 0.15;
        if (this.nuevaCompra.tarjeta === 'si') {
          totalPagar = totalPagar - totalPagar * 0.1;
        }
        this.nuevaCompra.total = totalPagar;
      } else if (this.nuevaCompra.boletos >= 3 && this.nuevaCompra.boletos <= 5) {
        totalPagar = totalPagar - totalPagar * 0.1;
        if (this.nuevaCompra.tarjeta === 'si') {
          totalPagar = totalPagar - totalPagar * 0.1;
        }
        this.nuevaCompra.total = totalPagar;
      } else {
        if (this.nuevaCompra.tarjeta === 'si') {
          totalPagar = totalPagar - totalPagar * 0.1;
        }
        this.nuevaCompra.total = totalPagar;
      }
      this.agregarVenta();
    } else {
      alert('No puedes comprar mas de 7 boletos por persona');
    }
  }

  agregarVenta(): void {
    if (
      this.nuevaCompra.boletos === 0 ||
      this.nuevaCompra.nombre === '' ||
      this.nuevaCompra.compradores === 0 ||
      this.nuevaCompra.tarjeta === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (this.indiceEdicion !== -1) {
      this.compra[this.indiceEdicion] = { ...this.nuevaCompra };
    } else {
      this.compra.push({ ...this.nuevaCompra });
    }

    localStorage.setItem('compra', JSON.stringify(this.compra));
    this.limpiarCampos();
  }

  editarCompra(index: number): void {
    const compraSeleccionada = this.compra[index];
    this.nuevaCompra = { ...compraSeleccionada };

    this.formulario.patchValue({
      boletos: compraSeleccionada.boletos,
      nombre: compraSeleccionada.nombre,
      compradores: compraSeleccionada.compradores,
      tarjeta: compraSeleccionada.tarjeta,
    });

    this.indiceEdicion = index;
  }

  eliminarCompra(index: number): void {
    this.compra.splice(index, 1);
    localStorage.setItem('compra', JSON.stringify(this.compra));
    if (this.indiceEdicion === index) {
      this.limpiarCampos();
    }
  }

  limpiarCampos(): void {
    this.nuevaCompra = {
      boletos: 0,
      nombre: '',
      compradores: 0,
      tarjeta: '',
      total: 0,
    };
    this.formulario.patchValue({
      boletos: 0,
      nombre: '',
      compradores: 0,
      tarjeta: '',
    });
    this.indiceEdicion = -1;
  }
}