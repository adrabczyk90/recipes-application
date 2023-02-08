import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService{
    private recipes: Recipe[] = [
        new Recipe('Chicken salad',
        'This is a tasty chicken salad',
        'https://images.squarespace-cdn.com/content/v1/5ef172ff63dc30623a3a3405/1607487521379-9CHKDL6MJRUQ2EA86JZ4/Oregano+Chicken+Schnity+HERO.jpg?format=1000w',
        [
            new Ingredient('Chicken breast', 1),
            new Ingredient('Lettuce', 1),
        ]
        ),

        new Recipe('Tasty Burger',
        'This is a tasty burger',
        'https://assets.bonappetit.com/photos/5c2e6d762efb8f2d33e396b8/1:1/w_2240,c_limit/Sunny-Side-Burger-with-Salsa-Verde.png',
        [
            new Ingredient('Burger patty', 1),
            new Ingredient('Burger gluten free buns', 1),
        ]
        ),
      ];

      constructor(private slService: ShoppingListService){

      }
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients : Ingredient []) {
    this.slService.addIngredients(ingredients);
    }
}
