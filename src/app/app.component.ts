import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Calculate } from './calculate';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  calculate = new Calculate();
  ObservCal: Observable <Calculate>;
  errorMsg:string;

  constructor(private Appservice: AppService) {}

  ngOnInit() {}

  Sumation() {
    // console.log(this.calculate.kilo, this.calculate.sum)
    this.ObservCal = this.Appservice.SendCalculate(this.calculate.kilo)
    this.ObservCal.subscribe(
      sumation => {
        this.calculate = sumation
        console.log(this.calculate)
        
      },
      err => this.errorMsg = <any>err

    )
  }
}
