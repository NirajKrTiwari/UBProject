import { useStore } from "../store/store";
export default function cart (){
     const CartData= useStore((state)=>state.cart);
    return(
    <div>Hello</div>
    )}