import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  number: number;
  title: string;
  writer: string;
  date: string;
  views: number;
  constructor() {}

  ngOnInit() {
    board => {
      this.number = board.number;
      this.title = board.title;
      this.writer = board.writer;
      this.date = board.date;
      this.views = board.views;
    };
    err => {
      console.log(err);
      return false;
    };
  }
}
