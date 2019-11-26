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
    //빈 필드 검증
    if (!this.validateService.validateProceed(user, card)) {
      this.flashMessage.show("모든 필드를 채워주세요", {
        cssClass: "alert-danger text-center",
        timeout: 3000
      });
      return false;
    }

    //이메일 검증
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show("유효한 이메일 주소를 입력하세요", {
        cssClass: "alert-danger text-center",
        timeout: 3000
      });
      return false;
    }

    //카드 번호 검증
    if (!this.validateService.validateCardnum(card.cardnumber)) {
      this.flashMessage.show("유효한 카드번호를 입력하세요", {
        cssClass: "alert-danger text-center",
        timeout: 3000
      });
      return false;
    }

    //카드 유효기간 검증
    if (!this.validateService.validateCardlimit(card.expire)) {
      this.flashMessage.show("카드 유효기간이 올바르지 않습니다", {
        cssClass: "alert-danger text-center",
        timeout: 3000
      })
      return false;
    }

    //카드 보안코드 검증
    if (!this.validateService.validateCardSecure(card.secretnum)) {
      this.flashMessage.show("카드의 보안코드가 올바르지 않습니다", {
        cssClass: "alert-danger text-center",
        timeout: 3000
      })
      return false;
    }


    //결제 정보 저장
    this.authService.storeOrderData(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {
          cssClass: "alert-success text-center",
          timeout: 3000
        })
        this.router.navigate(["/paysuccess"])
      } else {
        console.log(data)
        this.flashMessage.show(data.msg, {
          cssClass: "alert-danger",
          timeout: 3000
        })
      }
    })


  }
}
