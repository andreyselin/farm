import { FC } from 'react';
import { Animal } from '../../types.ts';

type AddAnimalDialogProps = {
  onAdd: (animal: Animal) => void;
  onCloseModal: () => void;
}

export const AddAnimalDialog: FC<AddAnimalDialogProps> = ({ onAdd, onCloseModal }) => {
  return null;
}
