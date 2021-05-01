import { Component, OnInit } from '@angular/core';
import * as BoardData from '../../../assets/data/board.json';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any = [];

  ngOnInit() {
    this.board = BoardData[2020];
    console.log(this.board);
  }
}
