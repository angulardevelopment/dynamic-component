import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-demo',
  templateUrl: './dynamic-component-demo.component.html',
  styleUrls: ['./dynamic-component-demo.component.css'],
})
export class DynamicComponentDemoComponent implements OnInit {
  context = {
    text: 'test',
  };
  constructor() {}

  ngOnInit() {}
}
