import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { TlistComponent } from './demo3/app/tlist/tlist.component';
import { TlistDemoComponent } from './demo3/app/tlist-demo/tlist-demo.component';
import { RuntimeContentComponent } from './demo3/app/runtime-content/runtime-content.component';
import { RuntimeContentDemoComponent } from './demo3/app/runtime-content-demo/runtime-content-demo.component';
import { DynamicContentComponent } from './demo3/app/dynamic-content/dynamic-content.component';
import { DynamicComponentDemoComponent } from './demo3/app/dynamic-component-demo/dynamic-component-demo.component';
import { DynamicSample1Component, DynamicSample2Component, UnknownDynamicComponent } from './demo3/app/dynamic-content/dynamic-content.component';
import { Home2Component } from './demo3/app/home2/home2.component';
@NgModule({
  declarations: [
    AppComponent,



    TlistComponent, TlistDemoComponent, RuntimeContentComponent, RuntimeContentDemoComponent, DynamicContentComponent, DynamicComponentDemoComponent, DynamicSample1Component,
    DynamicSample2Component, UnknownDynamicComponent, Home2Component,
  ],
  // dynamic components
  entryComponents: [
    DynamicSample1Component,
    DynamicSample2Component,
    UnknownDynamicComponent

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
