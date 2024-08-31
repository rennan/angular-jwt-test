import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    TableModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
