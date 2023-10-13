import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
  console.log(toasts);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({message, variant, id}) => (
        <li id={id} key={id} className={styles.toastWrapper}>
          <Toast message={message} variant={variant} id={id}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf; 
