import React from 'react';
import { Slide,ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const toastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}/>
  )
}

export default toastContainer