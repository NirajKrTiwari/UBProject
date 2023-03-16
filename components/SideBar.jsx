import React from "react";
import { slide as Menu } from "react-burger-menu";
import css from "../styles/SideBar.module.css";
import Link from 'next/link';
import MenuIcon from '../assets/menuIcon.png';
export default function SideBar(props){

  var styles = {
    bmBurgerButton: {
      width: '25px',
      height: '25px',
      position: 'relative',
      display: 'flex',
      cursor: 'pointer',
      zindex: '99'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: 'black'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      left:0,
      top :0
    },
    bmMenu: {
      background: 'white',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      // background: 'rgba(0, 0, 0, 0.3)',
    },
  }


  return (

    <Menu {...props} styles={styles} customBurgerIcon={ <img src="../assets/menuIcon.png" width={40} height={40} /> }>
    <div className={css.container}>
      <ul className={css.sideNav}>
        <Link href="/"><li>Home</li></Link>
        <Link href="/#menu"><li>Menu</li></Link>
        <Link href="/"><li>About Us</li></Link>
      </ul>
      </div>
    </Menu>
  );
};
