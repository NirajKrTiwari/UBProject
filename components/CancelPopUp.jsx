import React from 'react';
import css from "../styles/CancelPopUp.module.css"
import {useRouter} from 'next/router';

export default function CancelPopUp(){
    const router =useRouter();
    const trigger=()=>
    { 
      localStorage.removeItem('order');
      localStorage.removeItem('time');
      localStorage.removeItem('foodname');
      localStorage.removeItem('total');
        router.push(`/`)
    }
    return (
  <div className={css.container}>
   Sorry Your order is Cancel
   <button onClick={trigger} className={css.button}>Go to Home</button>
  </div>
);
}