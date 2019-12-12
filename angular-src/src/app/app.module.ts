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
import { PayshopComponent } from './components/payshop/payshop.component';
import { PaysuccessComponent } from './components/paysuccess/paysuccess.component';
import { RefundinfoComponent } from './components/refundinfo/refundinfo.component';
import { PayinfoComponent } from './components/payinfo/payinfo.component';
import { RefundsuccessComponent } from './components/refundsuccess/refundsuccess.component';
import { CertComponent } from './components/cert/cert.component';

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
    WriteboardComponent,
    PayshopComponent,
    PaysuccessComponent,
    RefundinfoComponent,
    PayinfoComponent,
    RefundsuccessComponent,
    CertComponent
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
export class AppModule { }
