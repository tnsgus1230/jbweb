import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
<<<<<<< HEAD
  ) { }
  ngOnInit() { }

=======
  ) {}
  ngOnInit() {}
>>>>>>> afe18c9f2159e95bddc767e4565728a987a2f8ae
  onLoginSubmit() {
    const login = {
      username: this.username,
      password: this.password
    };
    if (!this.authService.validatelogin(login)) {
      this.flashMessage.show("모든 필드를 채워주세요", {
        cssClass: "alert-danger text-center ",
        timeout: 3000
      });
      return false;
    }

    this.authService.authenticateUser(login).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show("로그인 되었습니다.", {
          cssClass: "alert-success",
          timeout: 5000
        });
        this.router.navigate([""]);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: "alert-danger",
          timeout: 5000
        });
        this.router.navigate(["login"]);
      }
    });
  }
}
