import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  number: string;
  title: string;
  writer: string;
  date: string;
  views: string;
  context: string;
  boardtitle: string;
  constructor(private authservice: AuthService) {}

  ngOnInit() {
    //TODO 이부분 잘건드려야대
    /* this.authservice.getboradtitle().subscribe(
      board => {
        this.writer = board.boardurl.writer;
        this.date = board.boardurl.date;
        this.views = board.boards.views;
      },
      err => {
        console.log(err);
        return false;
      }
    );*/

    this.boardtitle = localStorage.getItem("board");
    this.title = JSON.parse(this.boardtitle);
  }
}
