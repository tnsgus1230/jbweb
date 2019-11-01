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
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  registerUser(user): Observable<any> {
    const registerUrl = "http://localhost:3000/users/register";
    return this.http.post(registerUrl, user, httpOptions);
  }
  authenticateUser(login): Observable<any> {
    const loginUrl = "http://localhost:3000/users/authenticate";
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
    const profileUrl = "http://localhost:3000/users/profile";
    return this.http.get(profileUrl, httpOptions1);
  }
  getboradtitle(): Observable<any> {
    this.title = localStorage.getItem("title");
    const httpOptions2 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.title
      })
    };
    const boardurl = "http://localhost:3000/addbor/addborcontext";
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
}
