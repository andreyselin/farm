import { Animal } from './types.ts';

const memo: Animal[] = [];

class Api {
  apiBaseUrl = 'http://localhost:3007'

  async listAnimals(): Promise<Animal[]> {
    return [...memo];

    // const response = await fetch(`${this.apiBaseUrl}/list`);
    // return await response.json();
  }

  async addAnimal(animal: Animal): Promise<Animal[] | null> {
    const isAbleToAdd = !memo.some(el => el.name === animal.name);
    if (isAbleToAdd) {
      memo.push(animal);
    }
    return [...memo];

    try {
      const response = await fetch(`${this.apiBaseUrl}/add?name=${animal.name}`);
      return await response.json();
    } catch (e) {
      // Todo: toast
      return null;
    }
  }

  async removeAnimal (animal: Animal): Promise<Animal[] | null> {
    const index = memo.findIndex(el => el.name === animal.name);
    if (index > -1) {
      memo.splice(index, 1);
    }
    return [...memo];

    try {
      const response = await fetch(`${this.apiBaseUrl}/remove?name=${animal.name}`);
      return await response.json();
    } catch (e) {
      // Todo: toast
      return null;
    }
  }
}

export const api = new Api();
