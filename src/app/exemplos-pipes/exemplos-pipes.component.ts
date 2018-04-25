import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  book: any = {
    title: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.54321,
    pageNumber: 314,
    price: 44.99,
    releaseDate: new Date(2017, 4, 23),
    url: 'http://www.uol.com.br'
  };

  books: string [] = ['Java', 'Angular 2'];

  filtro: string;

  constructor() { }

  addCourse(value) {
    this.books.push(value);
    console.log(this.books);
  }

  obterCursos() {
    if (this.books.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.books;
    }

    return this.books.filter((v) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  ngOnInit() {
  }

}
