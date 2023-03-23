import React from 'react';
import css from '../styles/Hero.module.css';
import Image from 'next/image';
import Cherry from '../assets/Cherry.png';
import HeroImage from '../assets/hero-img.png';
import { UilPhone } from '@iconscout/react-unicons';
import Pizzal from '../assets/p1.jpg';
import Link from 'next/link';
import BannerMobile from '../assets/banner-mobile.png'
export default function Hero() {
  return (
    <div className={css.container}>
      {/* left */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>More than Faster</span>
          {/* <span className={css.cherryIcon}>
          <Image src={Cherry} alt="" width={40} height={25} />
          </span> */}
        </div>
        <div className={css.heroText}>
          <span>Be The Fastest</span>
          <span>In Delivering</span>
          <span>
            Your <span style={{ color:'#e70001' }}>Under Belly</span>
          </span>
        </div>
        <span className={css.miniText}>
          Our Mission is to filling your tummy with delicious food and with fast and free delivery
        </span>
        <Link href="/List">
          <button id="btn"className={`btn ${css.btn}`}>
            Get Started
          </button></Link>
      </div>


      {/* right */}
      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>
        <Link href="tel:+91 7005762566">
          <div className={css.ContactUs}>
            {/* <span>
              Contact Us
            </span> */}
            <div className={css.phoneIcon}>
              <UilPhone color='white' />
            </div>
          </div>
        </Link>

        <Link href="/food/paneer-pizza"><div className={css.Pizza}>
          <div>
            <Image src={Pizzal} alt="" objectFit='cover' layout='intrinsic' />
          </div>
          <div className={css.details}>
            <span>
              Paneer Pizza
            </span>
            <span><span style={{ color: 'var(--themeRed)' }}>Rs.</span> 250</span>
          </div>
        </div></Link>
      </div>

      <div className={css.rightmobile}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="" layout="intrinsic" />
        </div>
        <Link href="tel:+91 7005762566">
          <div className={css.ContactUs}>
            <span>
            </span>
            <div className={css.phoneIcon}>
              <UilPhone color='white' />
            </div>
          </div>
        </Link>

        <Link href="/food/paneer-pizza"><div className={css.Pizza}>
          <div>
            <Image src={Pizzal} alt="" objectFit='cover' layout='intrinsic' />
          </div>
          <div className={css.details}>
            <span>
            Paneer Pizza
            </span>
            <span><span style={{ color: 'var(--themeRed)' }}>Rs.</span> 250</span>
          </div>
        </div></Link>
      </div>


    </div>
  )
}
