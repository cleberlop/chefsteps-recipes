export interface Ingredient {
  name: string;
  quantity?: string;
}
export interface Step {
  step: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imgURL: string;
  ingredients: Array<Ingredient>;
  steps: Array<Step>;
}
