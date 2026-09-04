import { CurrencyPipe, DATE_PIPE_DEFAULT_OPTIONS, DatePipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "Anzil";
  mynumber = 10;
  currentDate = new Date();
  today: number = Date.now();
}

