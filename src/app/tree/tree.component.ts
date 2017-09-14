import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-tree',
    template: `
    <ul>
       <li *ngFor="let i of item.items">{{i.clean_category_name}}</li>
       <li *ngIf="item.children.items.length>0">
          <app-tree [item]=item.children></app-tree>
       </li>
    </ul>

  `,
    styles: []
})
export class TreeComponent implements OnInit {
    @Input() item;

    constructor() {}

    ngOnInit() {}
}
