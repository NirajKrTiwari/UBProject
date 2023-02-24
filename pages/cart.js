import Layout from "../components/Layout";
import { urlFor } from "../lib/client";
import css from '../styles/Cart.module.css';
import Image from 'next/image';
import { useStore } from '../store/store';
import toast,{Toaster} from 'react-hot-toast';
//import { useState } from "react";
// import OrderModal from "../components/OrderModal";

export default function cart (){
    const CartData= useStore((state)=>state.cart)
    // const removeFood =useStore((state)=>state.removeFood);
    // // const [PaymentMethod, setPaymentMethod] = useState(null);
    // const handleRemove=(i)=>
    // {
    //     removeFood(i);
    //     toast.error('Item Removed');
    // }
    //  const total=()=>CartData.food.reduce((a,b)=>a+b.quantity*b.price,0);

    // const handleOnDelivery=()=>
    // {
    //     setPaymentMethod(0);
    //     typeof window !== 'undefined' && localStorage.setItem('total',total());
    //     toast.success('Payment Method Selected');
    // }

    return(
        <Layout>
            <div className={css.container}>
                <div className={css.details}>
                <table className={css.table}>

                        <thead>
                            <tr>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            </tr>
                        </thead>

                        <tbody className={css.tbody}>
                            {CartData.food.length>0 && 
                                CartData.food.map((food,i)=>{
                                    const src=urlFor(food.image).url()
                                    return(
                                    <tr key={i}>
                                        <td className={css.imageTd}>
                                            <Image loader={()=>src}
                                            alt=""
                                            src={src}
                                            objectFit="cover"
                                            width={85}
                                            height={85}
                                            />
                                        </td>
                                        <td>
                                            {food.name}
                                        </td>
                                        <td>
                                            {food.price}
                                        </td>
                                        <td>
                                            {food.quantity}
                                        </td>
                                        <td>
                                            {food.price*food.quantity}
                                        </td>
                                        {/* <td style={{color:'var(--themeRed)',cursor:'pointer'}} 
                                        onClick={()=>handleRemove(i)}>x</td> */}
                                    </tr>
                                )}
                            )}
                        </tbody>

                    </table>

                </div>


                <div className={css.cart}>
                   <span>Cart</span>
                   <div className={css.CartDetails}>
                    <div>
                        {/* <span>Items</span><span>{CartData.food.length}</span> */}
                    </div>
                    <div>
                        <span>Total</span>
                        {/* <span>Rs. {total()}</span> */}
                    </div>
                   </div>
                   <div className={css.button}>
                    {/* <button className="btn" onClick={handleOnDelivery}>Pay on Delivery</button> */}
                    <button className="btn">Pay Now</button>
                   </div>
                </div>
            </div>
            <Toaster/>

            {/* Modal */}

            {/* <OrderModal
            opened={PaymentMethod === 0}
            setOpened={setPaymentMethod}
            PaymentMethod ={PaymentMethod}
            /> */}
        </Layout>
    )
  
}
