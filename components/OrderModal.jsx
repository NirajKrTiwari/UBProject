// This is for Order Details
import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css';
import { useEffect, useState } from 'react';
import { createOrder } from '../lib/orderHandler';


// import toast,{Toaster} from 'react-hot-toast';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import cogoToast from 'cogo-toast';

import { useStore } from '../store/store';
import {useRouter} from 'next/router';
// import { useDisclosure } from '@mantine/hooks';

export default function OrderModal({opened,setOpened,PaymentMethod}){
const router =useRouter();
const total= typeof window != 'undefined' && localStorage.getItem('total');
const theme = useMantineTheme();
const [FormData, setFormData] = useState({});
// const {close} = useDisclosure(false);
const foodname= typeof window != 'undefined' && localStorage.getItem('foodname');
const [Name, setName] = useState("");
const [Email, setEmail] = useState("");
const [Phone, setPhone] = useState("");
const [Address, setAddress] = useState("");
function close()
{
  setOpened(false);
}

// const handleInput=(e)=>
// {

//     setFormData({...FormData,[e.target.name]:e.target.value})
// }

const resetCart=useStore((state)=>state.resetCart)
const handleSubmit=async (e)=>
{
    e.stopPropagation();
    e.preventDefault();

  //   toast.success("Order Placed Successfully", {
  //     position: toast.POSITION.TOP_CENTER
  // });

  // cogoToast.success('Order Placed Successfully');
  cogoToast.loading("Please wait");

    const cancel="false";
    const id=await createOrder({...FormData,foodname,total,PaymentMethod,cancel});
    resetCart();
    {
        typeof window != 'undefined' && localStorage.setItem('order',id);
    }
    router.push(`/order/${id}`)

  // }
  // else{
  //   toast.error("Invalid Mobile Number");
  // }

}

useEffect(
  ()=>
  {
    // console.log(FormData)
  },[FormData]
)

const handleInput=(e)=>
{
  // if(e.target.name=='name')
  // {
  //   setName(e.target.value);
  // }
  // else if(e.target.name=='email')
  // {
  //   setEmail(e.target.value);
  // }
  // else if(e.target.name=='phone')
  // {
  //   setPhone(e.target.value);
  // }
  // else if(e.target.name=='address')
  // {
  //   setAddress(e.target.value);
  // }
  setFormData({...FormData,[e.target.name]:e.target.value})
  // setFormData({[e.target.name]:e.target.value})
}
// const checkHandle=(e)=>
// {
//   //  e.stopPropagation();
//   //   e.preventDefault();
//   cogoToast.success('Order Placed Successfully');
//   // cogoToast.loading("Please wait");
// }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      // onClose={setOpened==null}
      onClose={close}
    >
      {/* Modal content */}
      <form action=""  className={css.formContainer}>
        <input onChange={handleInput} type="text" name='name' placeholder='Name' required />
        <input onChange={handleInput} type="email" name='email' placeholder='Email' required/>
        <input onChange={handleInput} type="number" name='phone' placeholder='Phone Number' required/>
        {/* <textarea name="address"  rows={3}></textarea> */}
        <select onChange={handleInput} name="address" id="address" placeholder='Address' required>
            <option value="" disabled selected hidden>Address...</option>
            <option value="Academic Block">Academic Block</option>
            <option value="Girl's Hostel">Girls Hostel</option>
            <option value="Boy's Hostel Block-1">Boys Hostel Block-1</option>
            <option value="Boy's Hostel Block-2">Boys Hostel Block-2</option>
            <option value="Boy's Hostel Block-3">Boys Hostel Block-3</option>
        </select>
        <span>You will Pay <span>Rs. {total}</span> on delivery</span>
        <button  onClick={handleSubmit} type='submit' className={css.btn}>Place Order</button>
        {/* <div onClick={checkHandle}>Click</div> */}
      </form>
      {/* <Toaster/> */}
      {/* <ToastContainer /> */}
    </Modal>
  );
}