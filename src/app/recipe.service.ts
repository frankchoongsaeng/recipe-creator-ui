import { Injectable } from '@angular/core';
import { Entry } from './Entry';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipe: Entry[] = [];

  constructor() {}

  createNewRecipe(): void {
    this.recipe = [];
  }

  addEntry(entry: Entry): void {
    this.recipe.push(entry);
  }

  updateEntry(newEntry: Entry): void {
    this.recipe = this.recipe.map((entry) =>
      entry.id === newEntry.id ? newEntry : entry
    );
  }
}
