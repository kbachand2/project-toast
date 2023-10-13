import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, handleDismiss, toasts, setToasts }) {
  const Icon = ICONS_BY_VARIANT[variant];
  // function handleAddToast = {
  //   const newToast = {
  //     variant,
  //     message,
  //     id: Math.random();
  //   };
  //   const nextToast = [...]
  // }
  // const allToasts = [...toasts, newToast];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        {message}
      </p>
      <button 
        className={styles.closeButton}
        onClick={handleDismiss}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
