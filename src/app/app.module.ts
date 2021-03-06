import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { GaugeModule } from 'angular-gauge';
import { NgxSpinnerModule } from "ngx-spinner";
import { LocationFormComponent } from './location-form/location-form.component';
import { AlertComponent } from './alert/alert.component';
import { ObservationsComponent } from './observations/observations.component';
import { GaugeComponent } from './gauge/gauge.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    LocationFormComponent,
    AlertComponent,
    ObservationsComponent,
    GaugeComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GaugeModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [GaugeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
