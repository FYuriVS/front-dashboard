import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTransactionComponent } from './components/card-transaction/card-transaction.component';
import { ClientListComponent } from './components/client-list/client-list.component';

@NgModule({
  declarations: [CardTransactionComponent, ClientListComponent],
  imports: [CommonModule],
  exports: [CardTransactionComponent, ClientListComponent],
})
export class SharedModule {}
