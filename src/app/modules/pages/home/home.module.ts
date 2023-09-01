import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { CardGradientComponent } from 'src/app/components/card-gradient/card-gradient.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [HomeComponent, CardGradientComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ChartModule,
  ],
})
export class HomeModule {}
