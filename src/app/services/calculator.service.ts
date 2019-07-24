import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  
  // Calculates the Resistance
  calculate(digits, multiplier) {
    return digits * Math.pow(10, multiplier);
  }
  
  
}
