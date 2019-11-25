import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from 'src/app/services/validate.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-payinfo',
  templateUrl: './payinfo.component.html',
  styleUrls: ['./payinfo.component.scss']
})
export class PayinfoComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  cardnumber: string;
  expire: string;
  secretnum: number;
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onProceedSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email
    }
    const card = {
      cardnumber: this.cardnumber,
      expire: this.expire,
      secretnum: this.secretnum
    }

    if (!this.validateService.validateProceed(user, card)) {
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
  }


}
