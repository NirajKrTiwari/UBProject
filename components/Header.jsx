import css from '../styles/Header.module.css'
import Image from 'next/image';
import Logo from '../assets/logo.png';
export default function Header()
{
    return(
        <div className={css.header}>
            <div className={css.logo}>
                <Image src={Logo} alt=""/>
            </div>
        </div>
    )
}