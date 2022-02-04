import { Component, OnInit } from '@angular/core';
import { getBoardData } from 'src/app/services/board.service';

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

  async ngOnInit() {
    this.board = (await getBoardData()).year;
  }
}
