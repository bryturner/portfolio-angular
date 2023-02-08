import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
