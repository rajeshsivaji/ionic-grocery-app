import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.modal';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  food: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {
       this.id = +this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
   this.food = this.foodService.getFood(this.id) as Food;
  }

}
