import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent  implements OnInit {

  @Input() item!: Category;
  
  constructor() { 
   this.item = {} as Category; // Initialize item in the constructor
  }

  ngOnInit() {}

}
