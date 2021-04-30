import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tlist-demo',
  templateUrl: './tlist-demo.component.html',
  styleUrls: ['./tlist-demo.component.css']
})
export class TlistDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
items: any[] = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' }
    ];
}