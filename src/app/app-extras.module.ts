import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { SkyModule } from '@blackbaud/skyux/dist/core';
import { DataService } from './services/data.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
   // SkyModule
  ],
  providers: [DataService],
  entryComponents: []
})
export class AppExtrasModule { }
