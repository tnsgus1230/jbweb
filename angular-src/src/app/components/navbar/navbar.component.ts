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
  ) {}

  ngOnInit() {}
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
}
