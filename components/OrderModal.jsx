// This is for Order Details
import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css';
import { useEffect, useState } from 'react';
import { createOrder } from '../lib/orderHandler';

import cogoToast from 'cogo-toast';

import { useStore } from '../store/store';
import { useRouter } from 'next/router';

export default function OrderModal({ opened, setOpened, PaymentMethod }) {
  const router = useRouter();
  const total = typeof window != 'undefined' && localStorage.getItem('total');
  const theme = useMantineTheme();
  const [FormData, setFormData] = useState({});
  const foodname = typeof window != 'undefined' && localStorage.getItem('foodname');

  function close() {
    setOpened(false);
  }

  const [disabled, setDisabled] = useState(false)
  const resetCart = useStore((state) => state.resetCart);

  const handleSubmit = async (e) => {
    console.log(FormData);
    if (FormData.name == undefined || FormData.email == undefined || FormData.phone == undefined || FormData.address == undefined) {
      cogoToast.error("Please fill all the details");
      return;
    }
    setDisabled(true);
    e.stopPropagation();
    e.preventDefault();
    cogoToast.loading("Please wait");
    const cancel = "false";
    const id = await createOrder({ ...FormData, foodname, total, PaymentMethod, cancel });
    resetCart();
    {
      typeof window != 'undefined' && localStorage.setItem('order', id);
    }
    router.push(`/order/${id}`)

  }

  useEffect(
    () => {

    }, [FormData]
  )
  const emailId = typeof window !== 'undefined' && localStorage.getItem('email');

  const handleInput = (e) => {
    if (e.target.name == "agree") {
      setFormData({ ...FormData, email: emailId })
      console.log(FormData);
      //disable edit input name email
    }
    else {
      setFormData({ ...FormData, [e.target.name]: e.target.value })
      console.log(FormData);
    }

  }
  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={close}
    >
      <form action="" className={css.formContainer}>
        <input onChange={handleInput} type="text" name='name' placeholder='Name' required />
        {
          emailId ? (<input onChange={handleInput} type="email" name='email' id="email" placeholder='Email' value={emailId} readOnly={true} required />)
           : (<input onChange={handleInput} type="email" name='email' id="email" placeholder='Email' required />)

        }
        <input onChange={handleInput} type="number" name='phone' placeholder='Phone Number' required />
        <select onChange={handleInput} name="address" id="address" placeholder='Address' required>
          <option value="" disabled selected hidden>Address...</option>
          <option value="Academic Block">Academic Block</option>
          <option value="Girl's Hostel">Girls Hostel</option>
          <option value="Boy's Hostel Block-1">Boys Hostel Block-1</option>
          <option value="Boy's Hostel Block-2">Boys Hostel Block-2</option>
          <option value="Boy's Hostel Block-3">Boys Hostel Block-3</option>
          <option value="Boy's Hostel Block-3">Boys Hostel Block-4</option>
        </select>
        <span>You will Pay <span>Rs. {total}</span> on delivery</span>
        <div className={css.confirmationBox}>
          {/* <input className={css.agree} type="checkbox" id="agree" name="agree" onChange={handleInput} required/> */}
          <input type="checkbox" className={css.agree} id="agreeCheckbox" name="agree" onChange={handleInput} required></input>
          <label for="agreeCheckbox" className={css.toggle}></label>
          &nbsp;&nbsp;Please Confirm
        </div>
        <button disabled={disabled} onClick={handleSubmit} type='submit' className={css.btn}>Place Order</button>
      </form>
    </Modal>
  );
}