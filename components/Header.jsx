import css from '../styles/Header.module.css'
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import Link from 'next/link';
import { UilShoppingBag } from '@iconscout/react-unicons';
import {useStore} from "../store/store";
import { useEffect, useState } from 'react';
import { UilReceipt } from '@iconscout/react-unicons';
export default function Header()
{
  const items= useStore((state)=>state.cart.food.length);
  const CartData= useStore((state)=>state.cart);
  const [Order, setOrder] = useState("")
  useEffect(() => {
  setOrder(localStorage.getItem("order"));
  },[])
    return(
        <div className={css.header}>
        <Link href="/">
        <div className={css.logo}>
         <Image src={Logo} alt="" width={200} height={110}/>
          </div>
          </Link>
        <ul className={css.menu}>
        <Link href="/"><li>Home</li></Link>
        <Link href="/#menu"><li>Menu</li></Link>
          <li>About Us</li>
          </ul>
  
          <div className={css.rightSide}>
            <Link href='/Cart'>
            <div className={css.cart}>
              <UilShoppingBag size={35} color="#2E2E2E"/>
              <div className={css.badge}>{items}</div>
            </div>
            </Link>
  
            {Order && (
            <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2E2E2E"/>
              {Order !="" &&(
                <div className={css.badge}>1</div>
              )}
            </div>
            </Link>
            )}
          </div>
      </div>
    )
}