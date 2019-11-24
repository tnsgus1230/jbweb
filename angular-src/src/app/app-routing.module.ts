import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";

import { BoardComponent } from "./components/board/board.component";
import { WriteboardComponent } from "./components/writeboard/writeboard.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { CommunityComponent } from "./components/community/community.component";
import { AuthGuard } from "./guards/auth.guards";
import { PayshopComponent } from './components/payshop/payshop.component';
import { PayinfoComponent } from './components/payinfo/payinfo.component';
import { PaysuccessComponent } from './components/paysuccess/paysuccess.component';
import { RefundinfoComponent } from './components/refundinfo/refundinfo.component';
import { RefundsuccessComponent } from './components/refundsuccess/refundsuccess.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "board", component: BoardComponent },
  { path: "writeboard", component: WriteboardComponent },
  { path: "payshop", component: PayshopComponent },
  { path: "payinfo", component: PayinfoComponent },
  { path: "paysuccess", component: PaysuccessComponent },
  { path: "refundinfo", component: RefundinfoComponent },
  { path: "refundsuccess", component: RefundsuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
