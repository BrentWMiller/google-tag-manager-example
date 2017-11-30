import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FeatureComponent } from './component/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
