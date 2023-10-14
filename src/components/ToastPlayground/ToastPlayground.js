import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import Toast from '../Toast';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

function handleRemoveToast(id) {
  const nextToasts = toasts.filter((toastItem) => {
    return toastItem.id !== id;
  });
  setToasts(nextToasts);
  //write removal code
  //pass to toastshelf
}

function handleAddToast(event){
  event.preventDefault();
  const newToast = {
    message,
    variant,
    id: Math.random()
  };
  const nextToasts = [...toasts, newToast];
  setToasts(nextToasts);
  setMessage('');
  setVariant(VARIANT_OPTIONS[0]);
}

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleRemoveToast={handleRemoveToast}>
      </ToastShelf>

      {/* {isToastOpen &&
        <Toast 
          message={message}
          variant={variant}
          handleDismiss={handleDismiss}
        />
      }  */}

      <form 
        className={styles.controlsWrapper}
        onSubmit={handleAddToast}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>
        
        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
          {VARIANT_OPTIONS.map((option) => {
            const id=  `variant-${option}`
            return(
              <label htmlFor={id} key={id}>
                <input
                  id={id}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={(event) => {
                    setVariant(event.target.value);
                  }}
                />
                {option}
              </label>);
})}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
