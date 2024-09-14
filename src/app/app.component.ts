import {
  Component,
  ContentChildren,
  forwardRef,
  Inject,
  Injectable,
  QueryList,
  ViewChild,
} from '@angular/core';
import { TestDirective } from './demo3/app/test.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild(TestDirective) dir: TestDirective;
  changeCol() {
    this.dir.changeColor('blue');
  }
}

@Component({
  selector: 'child',
  template: '<div><h1>Child</h1></div>',
})
export class Child {}

@Component({
  selector: 'parent',
  template: '<div><h1>Parent</h1><ng-content></ng-content></div>',
})
export class Parent {
  @ContentChildren(Child) children: QueryList<Child>;
  // @ContentChildren(forwardRef(() => Child)) children; // <!- HERE
  // @ContentChildren(Child, { descendants: true }) children: QueryList<Child>;

  ngAfterContentInit() {
    console.log(this.children);
    console.log(this.children.toArray());

    console.log(this.children.length);
  }
}
