import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Toast = () => {
  const notify = () => {
    toast.success('Button clicked!', {
      duration: 5000, // 3 seconds
      position: 'top-center',
    });
  };

  return (
    <div>
      <button onClick={notify}>Click Me</button>
      {/* This Toaster component renders the toasts */}
      <Toaster />
    </div>
  );
};

export default Toast;
