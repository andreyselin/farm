import { FC } from 'react';
import { Animal } from '../../types.ts';
import styles from './AnimalsListItem.module.css';

type AnimalsListItemProps = {
  animal: Animal;
  onRemove: (animal: Animal) => void;
}

export const AnimalsListItem: FC<AnimalsListItemProps> = ({ animal, onRemove }) => {
  return (
    <div className={styles.animalsListItemContainer}>
      <div className={styles.animalsListItemName}>{animal.name}</div>
      <div><button onClick={() => onRemove(animal)} >Remove</button></div>
    </div>
  );
}
