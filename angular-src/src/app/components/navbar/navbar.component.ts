import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() { }
  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show("Logout", {
      cssClass: "alert-success",
      timeout: 3000
    });
    this.router.navigate([""]);
    return false;
  }
  checkLoggedIn() {
    return this.authService.loggedIn();
  }
  onDeleteCertClick() {
    localStorage.clear(); // 로컬스토리지 전체 삭제
    this.flashMessage.show('인증서 삭제 완료. 다시 로그인하세요. ', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
