import {Component, ContentChild, Directive, Input} from '@angular/core';

// @Directive({selector: 'pane'})
@Directive({selector: '[pane]'})

export class Pane {
  @Input() id!: string;

  ngAfterContentInit() {
    console.log('contentChild is set');
  }
}

@Component({
  selector: 'tab',
  template: `
    <div>pane: {{pane?.id}}</div>
  `
})
export class Tab {
  @ContentChild(Pane) pane!: Pane;
}

@Component({
  selector: 'example-app',
  template: `
    <tab>
      <!-- <pane id="1" *ngIf="shouldShow"></pane>
      <pane id="2" *ngIf="!shouldShow"></pane> -->
      <div pane id="1" *ngIf="shouldShow"></div>
      <div pane id="2" *ngIf="!shouldShow"></div>
    </tab>

    <button (click)="toggle()">Toggle</button>
  `,
})
export class ContentChildComp {
  shouldShow = true;

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
