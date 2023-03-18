import Layout from "../components/Layout";
import { urlFor } from "../lib/client";
import css from '../styles/Cart.module.css';
import Image from 'next/image';
import { useStore } from "../store/store";
import toast,{Toaster} from 'react-hot-toast';
import { useState } from "react";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/router";

export default function Cart (){
    const router=useRouter();
    const CartData= useStore((state)=>state.cart);
    const removeFood =useStore((state)=>state.removeFood);
    const [PaymentMethod, setPaymentMethod] = useState(null);
    const [Order,setOrder]=useState(
        typeof window !== 'undefined' && localStorage.getItem('order')
    )
    const handleRemove=(i)=>
    {
        removeFood(i);
        toast.error('Item Removed');
    }
    const total=()=>CartData.food.reduce((a,b)=>a+b.quantity*b.price,0);
    //preperation time
    const time=()=>
    {
        let t=0;
        const timearray=CartData.food.map((food)=>food.time);
        let i=0;
        for(i=0;i<timearray.length;i++)
        {
            t=t+timearray[i];
        }
        return t;
    
    }
    console.log(time());


    const timearray=CartData.food.map((food)=>food.time);
    
    const foodname=()=>
    {
        let val="";
        const name=CartData.food.map((food)=>food.name);
        const quan=CartData.food.map((food)=>food.quantity);
        let i=0;
        for(i=0;i<name.length;i++)
        {   
            if(i==0)
            {
                val=name[i]+"(qty: "+quan[i]+")";
                continue;
            }
            val=val+" ,"+name[i]+"(qty: "+quan[i]+")";
        }
        
        
        return val;
    }

    

    //name

    const handleOnDelivery=()=>
    {
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total',total());
        typeof window !== 'undefined' && localStorage.setItem('time',time());
        typeof window !== 'undefined' && localStorage.setItem('foodname',foodname());
    }

    const handleCheckout=async()=>
    {
        typeof window !== 'undefined' && localStorage.setItem('total',total());
        typeof window !== 'undefined' && localStorage.setItem('time',time());
        typeof window !== 'undefined' && localStorage.setItem('foodname',foodname());
        setPaymentMethod(1);
        const response = await fetch('/api/stripe',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(CartData.food),
        });
        if(response.status===500)    
        return;
        const data=await response.json();
        toast.loading("Redirecting.....");
        router.push(data.url);
    }


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
                                        <td style={{color:'var(--themeRed)',cursor:'pointer'}} 
                                        onClick={()=>handleRemove(i)}>x</td>
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
                        <span>Items</span><span>{CartData.food.length}</span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>Rs. {total()}</span>
                    </div>
                   </div>


                   {!Order && CartData.food.length>0?(
                   <div className={css.button}>
                    <button className="btn" onClick={handleOnDelivery}>Pay on Delivery</button>
                    <button className="btn" onClick={handleCheckout}>Pay Now</button>
                   </div>
                    ):null}

                </div>
            </div>
            <Toaster/>

            {/* Modal */}

            <OrderModal
            opened={PaymentMethod === 0}
            setOpened={setPaymentMethod}
            PaymentMethod ={PaymentMethod}
            foodname={foodname}
            />
        </Layout>
    )
  
}
