import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HOST = "https://kapi.kakao.com"

@Injectable({
  providedIn: 'root'
})
export class KakaopayService {

  constructor(private http: HttpClient) { }



  kakaopayready(params): Observable<any> {
    const httpheader = new HttpHeaders({
      Authorization: "KaKaoAK 0af0f3ff44cc213354ef88e1ab3d3494",
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
    })
    let options = {
      headers: httpheader
    }
    return this.http.post(HOST + "/v1/payment/ready", params, options)
  }
}
