import {useStore} from "../store/store";
import { useState } from 'react';
export default function Cart ()
{
     const items= useStore((state)=>state.cart.food.length);
     const CartData= useStore((state)=>state.cart);
     console.log(items);
    return(
    <div>{items}</div>
    )
}