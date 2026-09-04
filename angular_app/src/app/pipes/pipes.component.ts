import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, CurrencyPipe, PercentPipe, PercentPipe, DatePipe, SlicePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  name = "Anzil";
  mynumber = 10;
  currentDate = new Date();
  today: number = Date.now();
}
