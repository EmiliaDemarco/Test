import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contador-carrito',
  templateUrl: './contador-carrito.component.html',
  styleUrls: ['./contador-carrito.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ContadorCarritoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  cantidad = 1;
  //comunicacion hijo / padre
  @Output() cantidadCambiada = new EventEmitter<number>();
  //comunicacion padre / hijo
  @Input() cantidadInicial: number = 1;

  sumar () {
    this.cantidad = this.cantidad+1;
    this.cantidadCambiada.emit(this.cantidad);
  }

  restar (){
    if (this.cantidad > 1) 
      this.cantidad = this.cantidad-1;
      this.cantidadCambiada.emit(this.cantidad);
  }
}

//html = padre , head = hijo , body = hijo (hermanos entre sí). Se puede comunicar de hijo a padre y viceversa.
//comunicacion hijo/padre: creamos nuestros propios eventos, el padre podrá reaccionar a ese evento y hacer lo que quiera. 
