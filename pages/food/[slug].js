import Layout from '../../components/Layout';
import { client, urlFor } from '../../lib/client';
import css from '../../styles/Food.module.css';
import Image from 'next/image';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import { useState } from 'react';
import { useStore } from '../../store/store';
import toast,{Toaster} from 'react-hot-toast';
import Marquee from '../../components/Marquee';
export default function Food({ food }){
    const src = urlFor(food.image).url();
    const [quantity, setQuantity] = useState(1);
    const handleQuan = (type) => {
        type == "inc" ? setQuantity((prev) => prev + 1) : quantity === 1 ? null : setQuantity((prev) => prev - 1);
    }

    //add to cart function
    const addFood=useStore((state)=>state.addFood)
    const addToCart = () => {
        addFood({...food,price: food.price,quantity: quantity})
        toast.success("Added to Cart")
    }

    console.log(food)
    return (
        <Layout>
            <div className={css.container}>
                <div className={css.imageWrapper}>
                    <Image
                        loader={() => src}
                        src={src} alt=""
                        layout='fill'
                        unoptimized
                        objectFit="cover"
                    />
                </div>

                {/* Right Side */}
                <div className={css.right}>
                    <span>{food.name}</span>
                    <span className={css.description}>{food.description}</span>
                    <span><span style={{ color: 'var(--themeRed)' }}>Rs. </span>{food.price}</span>
                    <div className={css.quantity}>
                        <span>Quantity</span>
                        <div className={css.counter}>
                            <Image src={LeftArrow} height={20} width={20} alt="" objectFit='contain' onClick={()=>handleQuan("dec")} />
                            <span>{quantity}</span>
                            <Image src={RightArrow} height={20} width={20} alt="" objectFit='contain' onClick={()=>handleQuan("inc")}/>
                        </div>
                    </div>
                    <div className={`btn ${css.btn}`} onClick={addToCart}>
                        Add to Cart
                    </div>
                </div>
                <Toaster/>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "underbelly" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: "blocking",
    };
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const food = await client.fetch(
        `
      *[_type == "underbelly" && slug.current == $slug][0]
    // `,{ slug }
    );
    return {
        props: {
           food,
        },
    };
}
