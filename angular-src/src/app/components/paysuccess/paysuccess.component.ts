import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-paysuccess',
  templateUrl: './paysuccess.component.html',
  styleUrls: ['./paysuccess.component.scss']
})
export class PaysuccessComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getOrderdata().subscribe(
      orderdata => {
        this.name = orderdata.user.name;
        this.username = orderdata.user.username;
        this.email = orderdata.user.email;
      },
      err => {
        console.log(err);
        return false;
      }
    );



  }

}