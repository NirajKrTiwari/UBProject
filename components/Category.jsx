
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Statue from "../assets/s1.png"
import css from "../styles/Category.module.css"
import Pizza from "../assets/Pizza.jpg"
import Roll from "../assets/Roll.jpg"
import Burger from "../assets/Burger.jpg"
import SouthIndian from "../assets/SouthIndian.jpg"
//import Paintings from "../assets/Paintings.jpg"
import Chinese from "../assets/Chinese.jpg"
import { useState } from 'react';
import List from "../pages/List"
export default function Category()
{
    const [value, setvalue] = useState("")
    console.log(value);

    //send value to other component List
    const router = useRouter();
    if(value)
    {
        router.push({
            pathname: '/List',
            query: { value: value },
            })
    }

    
    return(
        <div className={css.Wrapper}>
            <h2>Category</h2>
            <div className={css.wrapperInternal}>
                <div className={css.category} onClick={()=>{setvalue("Pizza")}}>
                    <div className={css.image} ><Image className={css.image} src={Pizza} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Pizza
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Roll")}}>
                    <div className={css.image}><Image className={css.image} src={Roll} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Roll
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Burger")}}>
                    <div className={css.image}><Image className={css.image} src={Burger} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Burger
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Pizza")}}>
                    <div className={css.image}><Image className={css.image} src={Pizza} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Pizza
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("South Indian")}}>
                    <div className={css.image}><Image className={css.image} src={SouthIndian} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    South Indian
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Chinese")}}>
                    <div className={css.image}><Image className={css.image} src={Chinese} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Chinese
                    </p>
                </div>
            </div>
        </div>
    )
}