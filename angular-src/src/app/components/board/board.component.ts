import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  constructor(private authservice: AuthService) {}
  boards: any;
  ngOnInit() {
    this.authservice.getBoard().subscribe(boards => {
      this.boards = boards;
    });
  }
}
