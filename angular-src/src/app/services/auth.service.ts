import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/User";
import { Board } from "../models/Board";
import { JwtHelperService } from "@auth0/angular-jwt";
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

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}
  prepEndpoint(ep) {
    // 1. localhost에 포팅시
    return "http://localhost:3000/" + ep;

    // 2. Heroku 클라우드 서버에 포팅시
    // return ep;
  }

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
    const httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authToken
      })
    };
    const profileUrl = this.prepEndpoint("users/profile");
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

  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  loggedIn() {
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  getBoard() {
    const bbord = this.prepEndpoint("addbor/board");

    return this.http.get(bbord, httpOptions);
  }
}
