import { Component, OnInit } from '@angular/core';
import * as BoardData from '../../../assets/data/board.json';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any = [];
  selectedYear = 2021;

  selectChangeHandler(event: any) {
    this.selectedYear = event.value;
  }

  ngOnInit() {
    sessionStorage.setItem('routeChanged', 'true');
    this.board = BoardData.year;
  }
}
