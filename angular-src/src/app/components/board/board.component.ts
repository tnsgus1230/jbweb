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
    //ㅅㅂ ㄹ ㅁ도대채 왜안되는거야> ㅆㅣ빨 진짜 개짜쯩나녜
    this.authservice.getboradtitle().subscribe(
      boards => {
        this.title = boards.addbor.title;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
