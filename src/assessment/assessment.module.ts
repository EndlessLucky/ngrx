import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '../store';

import { AssessmentComponent } from "./container/assessment.component";

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: AssessmentComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    AssessmentComponent
  ],
  providers: [],
  exports: [AssessmentComponent]
})
export class AssessmentModule {}
