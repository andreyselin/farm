import { Animal } from './types.ts';
import { toast } from 'react-toastify';

class Api {
  apiBaseUrl = 'http://localhost:3008'

  async listAnimals(): Promise<Animal[]> {
    const response = await fetch(`${this.apiBaseUrl}/list`);
    return await response.json();
  }

  async addAnimal(animal: Animal): Promise<Animal[] | null> {
    const response = await fetch(`${this.apiBaseUrl}/add?name=${animal.name}`);
    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message);
      return null;
    }

    return data;
  }

  async removeAnimal(animal: Animal): Promise<Animal[] | null> {
    const response = await fetch(`${this.apiBaseUrl}/remove?name=${animal.name}`);
    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message);
      return null;
    }

    return data;
  }
}

export const api = new Api();
