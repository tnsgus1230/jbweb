import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthGuard } from "./guards/auth.guards";
import { JwtModule } from "@auth0/angular-jwt";
import { CommunityComponent } from "./components/community/community.component";
import { BoardComponent } from "./components/board/board.component";
import { WriteboardComponent } from "./components/writeboard/writeboard.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    CommunityComponent,
    BoardComponent,
    WriteboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("id_token");
        }
      }
    })
  ],
  providers: [ValidateService, AuthService, FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
