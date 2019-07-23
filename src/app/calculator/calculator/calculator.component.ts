import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public digit1; 
  public digit2;
  public digit3;
  public multiplier;
  public tolerance;
  public digits = [
    { color: 'Black', value: 0 },
    { color: 'Brown', value: 1 },
    { color: 'Red', value: 2 },
    { color: 'Orange', value: 3 },
    { color: 'Yellow', value: 4 },
    { color: 'Green', value: 5 },
    { color: 'Blue', value: 6 },
    { color: 'Violet', value: 7 },
    { color: 'Grey', value: 8 },
    { color: 'White', value: 9 }
  ];
  public multipliers = [
    { color: 'Black', value: 1 },
    { color: 'Brown', value: 10 },
    { color: 'Red', value: 100 },
    { color: 'Orange', value: 1000 },
    { color: 'Yellow', value: 10000 },
    { color: 'Green', value: 100000 },
    { color: 'Blue', value: 100000 },
    { color: 'Violet', value: 100000 },
    { color: 'Grey', value: 1000000 },
    { color: 'White', value: 10000 },
    { color: 'Gold', value: 10 },
    { color: 'Silver', value: 100 }
  ];
  public tolerances = [
    { color: 'Brown', value: 1 },
    { color: 'Red', value: 2 },
    { color: 'Orange', value: 3 },
    { color: 'Yellow', value: 4 },
    { color: 'Green', value: 0.5 },
    { color: 'Blue', value:  0.25 },
    { color: 'Violet', value: 0.10 },
    { color: 'Grey', value: 0.05 },
    { color: 'Gold', value: 5 },
    { color: 'Silver', value: 10 }
  ];
    
  constructor() { }

  ngOnInit() {
    
  }

}
