import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Appln1SharedModule } from 'app/shared/shared.module';
import { Appln1CoreModule } from 'app/core/core.module';
import { Appln1AppRoutingModule } from './app-routing.module';
import { Appln1HomeModule } from './home/home.module';
import { Appln1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Appln1SharedModule,
    Appln1CoreModule,
    Appln1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Appln1EntityModule,
    Appln1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Appln1AppModule {}
