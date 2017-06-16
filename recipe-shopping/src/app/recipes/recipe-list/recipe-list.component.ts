import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'spaghetti casserole', 
      'casserole made of spaghetti', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqxIxSdzm1v08bsT0SI0TOe8vEyB-x3YnEQ97aDz-VZgxaqWie'
    ),
    new Recipe(
      'fruitsicles',
      'popsicles of fresh fruit',
      'https://media1.popsugar-assets.com/files/thumbor/dsfRhxVsp52-T79HwPdFXbsvD9M/fit-in/1024x1024/' +
      'filters:format_auto-!!-:strip_icc-!!-/2011/07/29/4/192/1922664/aa4fff6f0563d733_fruit-pops.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }
}
