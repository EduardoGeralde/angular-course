import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';
  valorInput = '';
  valorSalvo;
  isMouseOver: boolean = false;
  nome: string = 'abc';
  
  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor (){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }
  botaoClicado(){
    alert('Botão Clicado');
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }
  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorInput = (<HTMLInputElement>evento.target).value;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }
}
