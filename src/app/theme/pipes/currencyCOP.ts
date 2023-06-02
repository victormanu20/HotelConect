import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCOP'
})
export class currencyCOP implements PipeTransform {
    transform(value:any) {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'COP',minimumFractionDigits: 0, }).format(value);
    }
}