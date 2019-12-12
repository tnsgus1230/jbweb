import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/User";
import { Board } from "../models/Board";
import { JwtHelperService } from "@auth0/angular-jwt";
import * as forge from 'node-forge'

const pki = forge.pki
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: User;
  title: string;
  board: Board;
  items: string[];
  ptoken: string;
  stoken: string;
  userNoPW: string;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }
  prepEndpoint(ep) {
    // 1. localhost에 포팅시
    return "http://localhost:3000/" + ep;

    // 2. Heroku 클라우드 서버에 포팅시
    // return ep;
  }

  //whitelist register


  //payment methods
  storeOrderData(paysave): Observable<any> {
    const paysaveUrl = this.prepEndpoint("payments/paysave");
    console.log(this.http.post(paysaveUrl, paysave, httpOptions));
    return this.http.post(paysaveUrl, paysave, httpOptions);
  }

  getOrderdata(): Observable<any> {
    this.authToken = localStorage.getItem("id_token");
    const profileUrl = this.prepEndpoint("payments/orderdata");
    const httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authToken
      })
    };
    return this.http.get(profileUrl, httpOptions1);
  }

  //
  registerUser(user): Observable<any> {
    const registerUrl = this.prepEndpoint("users/register");
    return this.http.post(registerUrl, user, httpOptions);
  }
  writeboard(board): Observable<any> {
    const boardurl = this.prepEndpoint("addbor/addborcontext");
    return this.http.post(boardurl, board, httpOptions);
  }
  authenticateUser(login): Observable<any> {
    const loginUrl = this.prepEndpoint("users/authenticate");
    return this.http.post(loginUrl, login, httpOptions);
  }
  getProfile(): Observable<any> {
    this.authToken = localStorage.getItem("id_token");
    const profileUrl = this.prepEndpoint("users/profile");
    const httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authToken
      })
    };
    return this.http.get(profileUrl, httpOptions1);
  }
  getboradtitle(): Observable<any> {
    const httpOptions2 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    const boardurl = this.prepEndpoint("addbor/board");
    return this.http.get(boardurl, httpOptions2);
  }

  storeUserData1(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  storeUserData(ptoken, stoken, userNoPW) {
    localStorage.setItem("ptoken", ptoken);
    localStorage.setItem("stoken", ptoken);
    localStorage.setItem("user", JSON.stringify(userNoPW));
    this.ptoken = ptoken;
    this.stoken = stoken;
    this.userNoPW = userNoPW
  }

  validatelogin(login) {
    //로그인시 입력필드 체크
    if (login.username == undefined || login.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  getBoard() {
    const bbord = this.prepEndpoint("addbor/board");

    return this.http.get(bbord, httpOptions);
  }

  certRequest(request): Observable<any> {
    // 키쌍 생성
    let keyPair = pki.rsa.generateKeyPair(2048);
    let publicKey = keyPair.publicKey;
    let privateKey = keyPair.privateKey;
    let publicKeyPem = pki.publicKeyToPem(publicKey);
    let privateKeyPem = pki.privateKeyToPem(privateKey);
    // 개인키 저장
    localStorage.setItem('privateKey', privateKeyPem);
    // 인증서 발급 요청 req 생성
    const req = {
      country: request.country,
      state: request.state,
      locality: request.locality,
      organization: request.organization,
      orgUnit: request.orgUnit,
      common: request.common,
      publicKey: publicKeyPem
    }
    const certUrl = this.prepEndpoint('users/cert');
    return this.http.post(certUrl, req, httpOptions);
  }

  storeCert(cert, caCert) {
    localStorage.setItem('cert', cert);
    localStorage.setItem('caCert', caCert);
  }

  authenticateSigUser(): Observable<any> {
    const privateKeyPem = localStorage.getItem('privateKey');
    const privateKey = pki.privateKeyFromPem(privateKeyPem);
    const certPem = localStorage.getItem('cert');
    const currentTime = new Date().getTime();
    const cert = pki.certificateFromPem(certPem);
    const username = cert.subject.getField('CN').value;
    let md = forge.md.sha1.create();
    md.update(username, 'utf8');
    md.update(currentTime, 'utf8');
    const signature = privateKey.sign(md);
    const signatureHex = forge.util.bytesToHex(signature);
    const request = {
      username: username,
      currentTime: currentTime,
      signatureHex: signatureHex,
      certPem: certPem
    };
    const loginUrl = this.prepEndpoint('users/authenticateSig');
    return this.http.post(loginUrl, request, httpOptions);
  }
  logout() {
    this.ptoken = null;
    this.stoken = null;
    this.userNoPW = null;
    localStorage.removeItem('ptoken');
    localStorage.removeItem('stoken');
    localStorage.removeItem('user');
  }
}
