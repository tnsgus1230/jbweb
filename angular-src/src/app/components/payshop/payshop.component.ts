import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const HOST = "https://kapi.kakao.com"


@Component({
  selector: 'app-payshop',
  templateUrl: './payshop.component.html',
  styleUrls: ['./payshop.component.scss']
})
export class PayshopComponent implements OnInit {

  constructor(private http: HttpClient) { }
  response: object;
  ngOnInit() {
    const httpheader = new HttpHeaders({
      "Authorization": "0af0f3ff44cc213354ef88e1ab3d3494",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    })
    let options = {
      headers: httpheader
    }
    let params = {
      "cid": "TC0ONETIME",
      "partner_order_id": "9999",
      "partner_user_id": "slackid",
      "item_name": "serverpass",
      "quantity": "1",
      "total_amount": "900",
      "tax_free_amount": "90",
      "approval_url": "http://localhost:4200/paymentsuccess",
      "cancel_url": "http://localhost:4200/paymentcancel",
      "fail_url": "http://localhost:4200/paymentfail"
    }
    console.log(this.http.post(HOST + "/v1/payment/ready", params, options))
    this.response = this.http.post(HOST + "/v1/payment/ready", params, options)
    let nexturl = this.response["next_redirect_pc_url"]
    console.log(this.response)
    return nexturl
  }

  kakaopayprocess() {

  }

  kakaopayready() {
    const httpheader = new HttpHeaders({
      "Authorization": "0af0f3ff44cc213354ef88e1ab3d3494",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    })
    let options = {
      headers: httpheader
    }
    let params = {
      "cid": "TC0ONETIME",
      "partner_order_id": "9999",
      "partner_user_id": "slackid",
      "item_name": "serverpass",
      "quantity": "1",
      "total_amount": "900",
      "tax_free_amount": "90",
      "approval_url": "http://localhost:4200/paymentsuccess",
      "cancel_url": "http://localhost:4200/paymentcancel",
      "fail_url": "http://localhost:4200/paymentfail"
    }

    this.response = this.http.post(HOST + "/v1/payment/ready", params, options)
    let nexturl = this.response["next_redirect_pc_url"]
    console.log(nexturl)
    return nexturl
  }




}
