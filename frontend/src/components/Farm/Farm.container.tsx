import { Farm } from './Farm.tsx';
import { FC, useEffect, useState } from 'react';
import { Animal } from '../../types.ts';
import { api } from '../../api.ts';

export const FarmContainer: FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const effect = async () => {
      setIsLoading(true);
      const list = await api.listAnimals();
      setAnimals(list);
      setIsLoading(false);
    }
    effect();
  }, []);

  const handleAdd = async (animal: Animal) => {
    setIsLoading(true);
    const result = await api.addAnimal(animal);
    if (result !== null) {
      setAnimals(result);
    }
    setIsLoading(false);
  }

  const handleRemove = async (animal: Animal) => {
    setIsLoading(true);
    const result = await api.removeAnimal(animal);
    if (result !== null) {
      setAnimals(result);
    }
    setIsLoading(false);
  }

  return <Farm
    isLoading={isLoading}
    animals={animals}
    onAdd={handleAdd}
    onRemove={handleRemove}
  />
}
