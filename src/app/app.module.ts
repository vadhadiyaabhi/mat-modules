import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StapperComponent } from './stapper/stapper.component';
import { AngularTreeComponent } from './angular-tree/angular-tree.component';



@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent,
    StapperComponent,
    AngularTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
