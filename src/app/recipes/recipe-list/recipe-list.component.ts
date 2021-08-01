import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://static01.nyt.com/images/2021/06/04/dining/04staff-roundup-top-art/merlin_149985834_c21d765b-c598-49f0-b659-575889283059-mediumSquareAt3X.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://static01.nyt.com/images/2021/06/04/dining/04staff-roundup-top-art/merlin_149985834_c21d765b-c598-49f0-b659-575889283059-mediumSquareAt3X.jpg'
    )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
