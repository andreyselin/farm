import { FC, useCallback, useState } from 'react';
import { Animal } from '../../types.ts';
import { AddAnimalDialog } from '../AddAnimalDialog';
import styles from './Farm.module.css';
import { AnimalsListItem } from '../AnimalsListItem';
import { LoadingOverlay } from '../LoadingOverlay';

type FarmProps = {
  isLoading: boolean;
  animals: Animal[];
  onAdd: (animal: Animal) => void;
  onRemove: (animal: Animal) => void;
}

export const Farm: FC<FarmProps> = ({ isLoading, animals, onAdd, onRemove }) => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);

  const showModal = useCallback(() => setIsAddModalVisible(true), []);
  const hideModal = useCallback(() => setIsAddModalVisible(true), []);

  return (
    <>
      {isAddModalVisible
        ? <AddAnimalDialog
          onAdd={onAdd}
          onCloseModal={hideModal}
        /> : null
      }

      <div className={styles.farmContainer}>
        { isLoading ? <LoadingOverlay /> : null }
        <div className={styles.animalsListContainer}>
          {animals.length === 0
            ? <div>You have no animals yet</div>
            : animals.map((animal) => <AnimalsListItem key={animal.name} animal={animal} onRemove={onRemove} />)}
        </div>
        <div className={styles.separator}></div>
        <div className={styles.controlsContainer}>
          <button onClick={showModal}>Add animal</button>
        </div>
      </div>
    </>
  );
}
