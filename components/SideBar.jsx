import React from "react";
import { slide as Menu } from "react-burger-menu";
import css from "../styles/SideBar.module.css";
import Link from 'next/link';
export default function SideBar(props){

  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '12px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      top:'20px',
      right:'20px',
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

    <Menu {...props} styles={styles}>
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
