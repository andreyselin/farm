import React, { FC } from 'react';
import './App.module.css'
import { FarmContainer } from '../Farm/Farm.container.tsx';
import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const App: FC = () => {
  return (
    <div className={styles.appContainer}>
      <FarmContainer />
      <ToastContainer />
    </div>
  )
}
