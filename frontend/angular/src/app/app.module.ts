import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {APP_BASE_HREF} from '@angular/common';
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
//  providers: [],
  providers: [{provide: APP_BASE_HREF, useValue: environment.baseHref}],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
