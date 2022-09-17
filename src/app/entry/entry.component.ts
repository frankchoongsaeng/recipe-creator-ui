import { Component, Input, OnInit } from '@angular/core';
import { Addition, Entry, Action } from '../Entry';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {
  @Input()
  entry!: Entry;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  changeType(newType: string) {
    if (newType === '$action') {
      const action = new Action();
      action.id = this.entry.id;
      this.updateEntry(action);
    } else if (newType === '$addition') {
      const addition = new Addition();
      addition.id = this.entry.id;
      this.updateEntry(addition);
    }
  }

  updateQuantity(value: string): void {
    if (this.entry.type === '$addition') {
      this.entry.measurement.quantity = parseInt(value);
    }
  }
  

  updateEntry(entry: Entry): void {
    this.recipeService.updateEntry(entry);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
