import { Component } from '@angular/core';
import { Action, Entry } from './Entry';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Untitled';

  constructor(public recipeService: RecipeService) {}

  trackByFn(_: number, item: Entry): string {
    return item.id;
  }

  createNewRecipe() {
    this.recipeService.createNewRecipe();
    this.title = 'Untitled';
  }

  addEntry() {
    this.recipeService.addEntry(new Action());
  }

  downloadRecipePDF() {}
}
