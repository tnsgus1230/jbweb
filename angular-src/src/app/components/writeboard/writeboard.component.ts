import { Component, OnInit, SimpleChange } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Profile } from "selenium-webdriver/firefox";

@Component({
  selector: "app-writeboard",
  templateUrl: "./writeboard.component.html",
  styleUrls: ["./writeboard.component.scss"]
})
export class WriteboardComponent implements OnInit {
  title: string;
  context: string;
  username: string;
  userwriter: string;
  //TODO today Date format 맞추기
  today: number = Date.now();

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,

    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      profile => {
        this.userwriter = profile.user.username;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
  onWriteBoard() {
    const board = {
      title: this.title,
      context: this.context,
      writer: this.userwriter,
      date: this.today
    };
    if (!this.validateService.vaildateBoard(board)) {
      this.flashMessage.show("모든 필드를 채워주세요", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    this.authService.writeboard(board).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("글쓰기 완료", {
          cssClass: "alert-success",
          timeout: 3000
        });
        this.router.navigate["/board"];
      }
    });
  }
}
