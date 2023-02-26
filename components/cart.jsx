import {useStore} from "../store/store";
export default function cart ()
{
     const items= useStore((state)=>state.cart.food.length);
     console.log(items);
    return(
    <div>{items}</div>
    )
}