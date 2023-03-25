import React from 'react';
import 'reactjs-popup/dist/index.css';
import css from "../styles/CancelPopUp.module.css"
import { useState } from 'react';

import {useRouter} from 'next/router';

export default function CancelPopUp(){
    const router =useRouter();
    const cancel="false";
    console.log(cancel);
    const trigger=()=>
    {
      localStorage.clear();
        router.push(`/`)
    }
    return (
  <div className={css.container}>
   Sorry Your order is Cancel
   <button onClick={trigger} className={css.button}>Go to Home</button>
  </div>
)
}