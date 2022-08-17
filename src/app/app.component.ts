import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clase_2_programacion';
  edad: number = 30;
  direccion: string = "Calle falsa 1234";
  resultado: number=0;
  nro_random: number= 0;
  dias_semana: string[] = ["dia", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
  dia:string = "";
  contador: number = 0;
  sumar(numero1: number, numero2: number): number{
    return numero1 + numero2;
  }
  potencia(numbero1: number, numbero2: number): number{
    return numbero1 ** numbero2;
  }

  sumarDos(): void {
    this.resultado = this.resultado + 2
  }

  numeroRandom(): void {
    this.nro_random = Math.ceil(Math.random()*100000)
  }
  diasSemana(): void {
   this.dia = this.dias_semana[Math.ceil(Math.random()*(7))]}



}