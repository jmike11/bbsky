import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataService } from './services/data.service';

import { SkyModalTestComponent } from './modal-test.component';
import { SkyModalDemoFormComponent } from './modal/modal-demo-form.component';

// Specify entry components, module-level providers, etc. here.
@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
   // SkyModule
  ],
  providers: [DataService],
  entryComponents: [SkyModalDemoFormComponent]
})
export class AppExtrasModule { }
