import { Component, OnInit, Input, ContentChild, TemplateRef  } from '@angular/core';

@Component({
  selector: 'app-tlist',
  templateUrl: './tlist.component.html',
  styleUrls: ['./tlist.component.css']
})
export class TlistComponent implements OnInit {
  @ContentChild(TemplateRef, {static: false}) template: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }


    @Input()
    items: any[] = [];
}