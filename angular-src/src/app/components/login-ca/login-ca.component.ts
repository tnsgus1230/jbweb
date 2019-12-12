import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-ca',
  templateUrl: './login-ca.component.html',
  styleUrls: ['./login-ca.component.scss']
})
export class LoginCAComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSigSubmit() {
    this.authService.authenticateSigUser().subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.ptoken, data.stoken, data.userNoPW);
        this.flashMessage.show('로그인 성공', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['']);
      } else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['loginCA']);
      }
    });
  }

}
