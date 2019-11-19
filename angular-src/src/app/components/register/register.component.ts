import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;
  password2: string;
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}
  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      password2: this.password2
    };
    //Require Fileds
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show("모든 필드를 채워주세요", {
        cssClass: "alert-danger text-center",

        timeout: 3000
      });
      return false;
    }
    //Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show("유효한 이메일 주소를 입력하세요", {
        cssClass: "alert-danger text-center",
        timeout: 3000
      });
      return false;
    }
    //비밀번호 가 다를시
    if (this.password != this.password2) {
      this.flashMessage.show("두 비밀번호가 일치하지 않습니다. ", {
        cssClass: "alert-danger text-center",
        timeout: 3000
      });
    }
    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        if (this.password == this.password2) {
          this.flashMessage.show(
            "가입에 성공하셨습니다 정상적으로 서비스 이용이 가능합니다. ",
            {
              cssClass: "alert-success text-center",
              timeout: 3000
            }
          );
          this.router.navigate(["/login"]);
        }
      } else {
        this.flashMessage.show("가입에 실패했습니다.", {
          cssClass: "alert-danger",
          timeout: 3000
        });
        this.router.navigate(["/register"]);
      }
    });
  }
}
