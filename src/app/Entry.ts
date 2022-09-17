import { nanoid } from 'nanoid';

export type Entry = Action | Addition;

export class Action {
  id: string;
  type: '$action' = '$action';
  action: string;

  constructor() {
    this.id = nanoid();
    this.action = '';
  }
}

export class Addition {
  id: string;
  type: '$addition' = '$addition';
  ingredient: string;
  measurement: Measurement;

  constructor() {
    this.id = nanoid();
    this.ingredient = '';
    this.measurement = new Measurement();
  }
}

export class Measurement {
  unit: 'tbsp' | 'tsp' | 'cup';
  quantity: number;

  constructor() {
    this.quantity = 0;
    this.unit = 'tbsp';
  }
}
