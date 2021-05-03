import { Component, OnInit } from '@angular/core';
import * as BoardData from '../../../assets/data/board.json';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any = [];
  selectYear;

  selectChangeHandler (event: any){
    this.selectYear = event.target.value;
  }

  ngOnInit() {
    this.board = BoardData.year;
    //console.log(this.board);

    console.log(this.selectYear);

  }
}
