import React from 'react';

function useEscapeKey(callback){
    React.useEffect(() => {
      function handleToastDismiss(event) {
        if(event.code === 'Escape'){
          callback(event);
        }
      }
      window.addEventListener('keydown', handleToastDismiss);
    
      return() => {
        window.removeEventListener('keydown', handleToastDismiss);
      }
    
    
    }, [callback]);

}

export default useEscapeKey