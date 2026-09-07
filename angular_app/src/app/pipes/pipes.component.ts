import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';
import { AddDeveloperPipe } from '../pipe/add-developer.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, CurrencyPipe, PercentPipe, PercentPipe, DatePipe, SlicePipe,AddDeveloperPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  name = "Anzil";
  mynumber = 10;
  currentDate = new Date();
  today = Date.now();

  birthdate = new  Date(2010,8, 23);
  // here the Date object uses zero-based months.so january=0 and so on.
  toggle = true;

  get format(){
     return this.toggle? "mediumDate": "fullDate"
  }
  change(){this.toggle =!this.toggle;}


}


