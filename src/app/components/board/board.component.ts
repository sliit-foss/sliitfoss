import { Component, OnInit } from '@angular/core';
import * as BoardData from '../../../assets/data/board.json';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any = [];
  selectYear = 2020;

  selectChangeHandler(event: any) {
    this.selectYear = event.target.value;
  }

  ngOnInit() {
    this.board = BoardData.year;
    //console.log(this.board);
  }
}
