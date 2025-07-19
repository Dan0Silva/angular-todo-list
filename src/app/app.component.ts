import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {}
