import { Component, OnInit } from '@angular/core';
import * as BoardData from '../../../assets/data/board.json';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any = [];
  selectedYear = 2021;

  boardMembers = this.firestore
    .collection('boards')
    .doc(this.selectedYear.toString() || '2021')
    .collection('members')
    .valueChanges({ idField: 'id' });

  selectChangeHandler(event: any) {
    this.selectedYear = event.value;
  }

  ngOnInit() {
    this.board = BoardData.year;
  }

  constructor(private firestore: AngularFirestore) {}
}
