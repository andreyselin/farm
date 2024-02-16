import { FC } from 'react';
import styles from './LoadingOverlay.module.css';

export const LoadingOverlay: FC = () => {
  return <div className={styles.loadingOverlayContainer}>Loading</div>
}
