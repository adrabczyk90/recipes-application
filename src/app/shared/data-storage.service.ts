import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
    private recipesService: RecipeService){

  }

  storeRecipes(){
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://ng-complete-guide-6bf78-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes).subscribe(response => {
      console.log(response);
    });
  }
}
