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
<<<<<<< HEAD
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  registerUser(user): Observable<any> {
    const registerUrl = this.prependpoint("/users/register");
=======
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
>>>>>>> 81ae9c92b376471d959a05c1db3a745929b8e63d
    return this.http.post(registerUrl, user, httpOptions);
  }
  writeboard(board): Observable<any> {
    const boardurl = this.prepEndpoint("addbor/addborcontext");
    return this.http.post(boardurl, board, httpOptions);
  }
  authenticateUser(login): Observable<any> {
<<<<<<< HEAD
    const loginUrl = this.prependpoint("/users/authenticate");
=======
    const loginUrl = this.prepEndpoint("users/authenticate");
>>>>>>> 81ae9c92b376471d959a05c1db3a745929b8e63d
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
<<<<<<< HEAD
    const profileUrl = "/users/profile";
    return this.http.get(profileUrl, httpOptions1);
  }
  getboradtitle(): Observable<any> {
    this.title = localStorage.getItem("title");

    const boardurl = this.prependpoint("/addbor/addborcontext");
    return this.http.get(boardurl, httpOptions);
=======
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
>>>>>>> 81ae9c92b376471d959a05c1db3a745929b8e63d
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
<<<<<<< HEAD
  prependpoint(ep) {
    return "http://localhost:3000/" + ep
    //return ep
=======

  getBoard() {
    const bbord = this.prepEndpoint("addbor/board");

    return this.http.get(bbord, httpOptions);
>>>>>>> 81ae9c92b376471d959a05c1db3a745929b8e63d
  }
}
