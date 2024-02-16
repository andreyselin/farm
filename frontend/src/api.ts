import { Animal } from './types.ts';

class Api {
  apiBaseUrl = 'http://localhost:3007'

  async listAnimals(): Promise<Animal[]> {
    return [];

    // const response = await fetch(`${this.apiBaseUrl}/list`);
    // return await response.json();
  }

  async addAnimal(animal: Animal): Promise<Animal[] | null> {
    return [];

    try {
      const response = await fetch(`${this.apiBaseUrl}/add?name=${animal.name}`);
      return await response.json();
    } catch (e) {
      // Todo: toast
      return null;
    }
  }

  async removeAnimal (animal: Animal): Promise<Animal[] | null> {
    return [];

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
