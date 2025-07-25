import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
  imports: [CommonModule, SharedModule],
})
export class FeaturesModule {}
