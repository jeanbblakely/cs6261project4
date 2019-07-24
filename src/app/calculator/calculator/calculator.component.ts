import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from './../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public resistance;
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
    { color: 'Brown', value: 0.01 },
    { color: 'Red', value: 0.1 },
    { color: 'Orange', value: 1 },
    { color: 'Yellow', value: 0.01 },
    { color: 'Green', value: 0.1 },
    { color: 'Blue', value: 1 },
    { color: 'Violet', value: 0.01 },
    { color: 'Grey', value: 0.1 },
    { color: 'White', value: 1.00 },
    { color: 'Gold', value: 0.1 },
    { color: 'Silver', value: 0.01 }
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
    
  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.calculate();
  }
  
  // Calculates the resistance
  calculate() {
    let digit = this.digit1.toString() + this.digit2.toString() + this.digit3.toString();
    digit.Number();
    this.resistance = this.calculatorService.calculate(digit, this.multiplier);
  }

}
