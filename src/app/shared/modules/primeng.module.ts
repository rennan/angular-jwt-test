import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TableModule,
  ],
})
export class PrimeNgModule {}
