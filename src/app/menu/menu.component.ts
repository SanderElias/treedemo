import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
    <app-tree  [item]='tree'></app-tree>
    `
})
export class MenuComponent implements OnInit {
    categories = [
        {
            category_name: 'Algemeen',
            clean_category_name: 'algemeen',
            depth: 0
        },
        {
            category_name: 'Code kloppen',
            clean_category_name: 'code-kloppen',
            depth: 1
        },
        {
            category_name: 'Development',
            clean_category_name: 'development',
            depth: 0
        },
        {
            category_name: 'Middle-end',
            clean_category_name: 'middle-end',
            depth: 1
        },
        {
            category_name: 'xxx',
            clean_category_name: 'xxx',
            depth: 2
        },
        {
            category_name: 'aaa',
            clean_category_name: 'aaa',
            depth: 3
        },
        {
            category_name: 'King of the void!',
            clean_category_name: 'king-of-the-void',
            depth: 4
        }
    ];
    tree: any;

    constructor() {}

    ngOnInit() {
        this.categories.sort((x, y) => (x.depth < y.depth ? 0 : 1));
        this.tree = this.categories.reduce(toTree, {});
    }
}

let last = undefined;
function toTree(acc, item) {
    if (last === undefined) {
        acc = {
            items: [item],
            depth: 0,
            children: { items: [], depth: 1 }
        };
        last = acc;
        return acc;
    }
    if (last.depth !== item.depth) {
        last = last.children;
        last.depth = item.depth;
        last.children = { items: [], depth: undefined };
    }
    last.items.push(item);
    return acc;
}
