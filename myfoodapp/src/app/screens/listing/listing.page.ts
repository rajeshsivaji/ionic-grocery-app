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
  this.foods = this.foodService.getFoods();
  }

  getCategories(){
    this.categories = [
      {
        id: 1,
        label: "beef",
        image: "https://www.themealdb.com/images/category/beef.png",
        active: false  
      },
      {
        id: 2,
        label: "Chicken",
        image: "https://www.themealdb.com/images/category/chicken.png",
        active: false  
        },
      {
        id: 3,
        label: "Dessert",
        image: "https://www.themealdb.com/images/category/dessert.png",
        active: false
           },
      {
        id: 4,
        label: "Lamb",
        image: "https://www.themealdb.com/images/category/lamb.png",
        active: false
           }
    
    ];
  }

}
