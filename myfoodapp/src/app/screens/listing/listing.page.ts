import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.modal';
import { Foodservice } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
categories: Category[] = [];
foods: Food[] = [];
  constructor(private foodService: Foodservice) { }

  ngOnInit() {
  this.getCategories();
  }

  getCategories(){
    this.categories = [
      {
        id: 1,
        label:'All',
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        active:false
      },
      {
        id: 2,
        label:'Burgers',
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        active:false
      },
      {
        id: 3,
        label:'Dishes',
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        active:false
      },
      {
        id: 4,
        label:'Shushi',
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        active:false
      }
    ];
  }

}
