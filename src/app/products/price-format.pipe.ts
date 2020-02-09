import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatToCurrency'
})

export class PriceFormatPipe implements PipeTransform {
  transform(price: number): string {
    return `$${parseFloat(String(price)).toFixed(2)}`;
  }
}
