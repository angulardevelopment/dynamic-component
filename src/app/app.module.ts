import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, Child, Parent } from './app.component';




import { TlistComponent } from './demo3/app/tlist/tlist.component';
import { TlistDemoComponent } from './demo3/app/tlist-demo/tlist-demo.component';
import { RuntimeContentComponent } from './demo3/app/runtime-content/runtime-content.component';

import { DynamicContentComponent } from './demo3/app/dynamic-content/dynamic-content.component';
import { DynamicComponentDemoComponent } from './demo3/app/dynamic-component-demo/dynamic-component-demo.component';
import { DynamicSample1Component, DynamicSample2Component, UnknownDynamicComponent } from './demo3/app/dynamic-content/dynamic-content.component';
import { ContentChildComp, Pane, Tab } from './demo3/dummy';
import { TestDirective } from './demo3/app/test.directive';

@NgModule({
  declarations: [
    AppComponent, TlistComponent, TlistDemoComponent, RuntimeContentComponent, DynamicContentComponent, DynamicComponentDemoComponent ,
    ContentChildComp, Pane, Tab,
    Parent,Child, TestDirective ],
  // dynamic components - optional
  entryComponents: [
    // DynamicSample1Component,
    // DynamicSample2Component,
    // UnknownDynamicComponent

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
