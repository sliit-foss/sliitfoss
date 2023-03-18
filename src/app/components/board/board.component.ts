import { Component, OnInit } from '@angular/core';
import { getBoardData } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any = { 2021: [] };
  selectedYear = new Date().getFullYear();
  loading: Boolean = false;

  selectChangeHandler(event: any) {
    this.selectedYear = event.value;
  }

  async ngOnInit() {
    this.loading = true;
    const boardData = await getBoardData();
    this.loading = false;
    this.board = boardData.year;
    if (!this.board[this.selectedYear]) {
      this.selectedYear--;
    }
  }
}
