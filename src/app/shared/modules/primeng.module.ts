import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [ButtonModule, InputTextModule],
})
export class PrimeNgModule {}
