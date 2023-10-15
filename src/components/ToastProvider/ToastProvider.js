//this component will manage everything related to the Toast concern
//everything related to Toast gets moved over
//leave state in ToastPlayground

import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant){
    const nextToasts = [...toasts,
    {
      message,
      variant,
      id: Math.random(),
    },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toastItem) => {
      return toastItem.id !== id;
    });
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{toasts, createToast, dismissToast,}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
