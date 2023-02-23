import React from 'react';
import css from '../styles/Menu.module.css';
import Image from 'next/image';
import { urlFor } from '../lib/client';
import Link from 'next/link';
export default function Menu({ub})
  {
    return(
        <div className={css.container} id="menu">
        <div className={css.heading}>
            <span>Our Menu</span>
            <span>Menu That Always</span>
            <span>Make you Fall In Love</span>
        </div>

        {/* Menu List */}
        <div className={css.menu}>
            {ub.map((underbelly, id) => {
                const src = urlFor(underbelly.image).url();
                return (
                    <div className={css.food} key={id}>
                        <Link href={`./food/${underbelly.slug.current}`}>
                        <div className={css.ImageWrapper}>
                            <Image
                                loader={() => src}
                                src={src}
                                alt=""
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        </Link>
                        <span>{underbelly.name}</span>
                        <span><span style={{color:'var(--themeRed)'}}>Rs. </span>{underbelly.price}</span>
                    </div>
                )
            })
            }
        </div>

    </div>
    )
}