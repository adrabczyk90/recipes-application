import { RecipeService } from './../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: subscription) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
         this.id = +params['id'];
         this.editMode = params['id '] != null;
         console.log(this.editMode);
       }
    )
  }

  private initForm(){
    let recipeName = '';

    if (this.editMode){
      recipeName = this.
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl,

    });
  }

}
