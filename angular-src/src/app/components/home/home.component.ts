import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  image1: any;
  image2: any;
  image3: any;
  image4: any;
  image5: any;

  constructor() {}

  ngOnInit() {
    this.image1 = "../../../assets/1.jpg";
    this.image2 = "../../../assets/2.jpg";
    this.image3 = "../../../assets/3.jpg";
    this.image4 = "../../../assets/4.jpg";
    this.image5 = "../../../assets/5.jpg";
  }
}
