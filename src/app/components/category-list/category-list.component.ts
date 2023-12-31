import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mw-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  @Input()
  categories: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
