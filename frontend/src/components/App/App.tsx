import { FC } from 'react';
import './App.module.css'
import { FarmContainer } from '../Farm/Farm.container.tsx';
import styles from './App.module.css';

export const App: FC = () => {
  return (
    <div className={styles.appContainer}>
      <FarmContainer />
    </div>
  )
}
