import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Appln1SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Appln1SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Appln1HomeModule {}
