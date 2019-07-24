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
  public multipliers;
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
    { color: 'Silver', value: 10 },
    { color: 'None', value: 20 },
  ];
    
  constructor(private calculatorService: CalculatorService) { 
    this.multipliers = this.digits.slice(0);
    this.multipliers.push( 
      { color: 'Gold', value: -1 },
      { color: 'Silver', value: -2 }
      );
    this.digit1 = this.digits[0].value;
    this.digit2 = this.digits[0].value;
    this.digit3 = this.digits[0].value;
    this.multiplier = this.multipliers[0].value;
    this.tolerance = this.tolerances[0].value;
    
  }

  ngOnInit() {
    this.calculate();
  }
  
  // Calculates the resistance
  calculate() {
    let digit = this.digit1.toString() + this.digit2.toString() + this.digit3.toString();
    this.resistance = this.calculatorService.calculate(Number(digit), this.multiplier) + ' ohms +/-' + this.tolerance.toString() + '%';
  }

}
