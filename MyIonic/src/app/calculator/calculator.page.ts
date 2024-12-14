import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  displayValue: string | number = '0'; // Allows both numbers and strings for error messages
  operator: string = '';
  firstValue: number | null = null;
  waitingForSecondValue = false;

  onButtonClick(value: string) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      this.handleOperator(value);
      return;
    }

    if (value === '=') {
      this.calculate();
      return;
    }

    if (value === '.') {
      if (!String(this.displayValue).includes('.')) {
        this.displayValue += '.';
      }
      return;
    }

    // Handle normal number input
    if (this.waitingForSecondValue) {
      this.displayValue = value;
      this.waitingForSecondValue = false;
    } else {
      this.displayValue = this.displayValue === '0' ? value : this.displayValue + value;
    }
  }

  handleOperator(operator: string) {
    if (this.firstValue === null) {
      this.firstValue = parseFloat(this.displayValue as string);
    } else if (this.operator) {
      this.calculate();
    }
    this.operator = operator;
    this.waitingForSecondValue = true;

    // Display the operator temporarily in the display
    this.displayValue = operator;
  }

  calculate() {
    if (this.firstValue === null || this.operator === '') return;

    const secondValue = parseFloat(this.displayValue as string);
    let result: number | string;

    switch (this.operator) {
      case '+':
        result = this.firstValue + secondValue;
        break;
      case '-':
        result = this.firstValue - secondValue;
        break;
      case '*':
        result = this.firstValue * secondValue;
        break;
      case '/':
        if (secondValue === 0) {
          result = 'Cannot divided by zero';
        } else {
          result = this.firstValue / secondValue;
        }
        break;
      default:
        return;
    }

    this.displayValue = result;
    this.firstValue = typeof result === 'number' ? result : null; // Only store result if it's a number
    this.operator = '';
    this.waitingForSecondValue = true;
  }

  clearDisplay() {
    this.displayValue = '0';
    this.firstValue = null;
    this.operator = '';
    this.waitingForSecondValue = false;
  }

  backspace() {
    if (String(this.displayValue).length > 1) {
      this.displayValue = String(this.displayValue).slice(0, -1);
    } else {
      this.displayValue = '0';
    }
  }

  onKeyPress(event: KeyboardEvent) {
    const key = event.key;

    // Handle number and operator keys
    if (!isNaN(Number(key))) {
      this.onButtonClick(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      this.handleOperator(key);
    } else if (key === 'Enter' || key === '=') {
      this.calculate();
    } else if (key === 'Escape' || key === 'c') {
      this.clearDisplay();
    } else if (key === '.') {
      this.onButtonClick(key);
    } else if (key === 'Backspace') {
      this.backspace();
    }
  }
}
