import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import { client } from "../lib/client"
import { useState } from "react";
import css from "../styles/Profile.module.css";

export default function Profile(props)
{
    const router = useRouter();
    const handleLogout=(e)=>
    {
        toast.success("Logout Successfull")
        localStorage.removeItem('email');
        router.push("/");
    }

    const xy=typeof window !== 'undefined' && localStorage.getItem('email');
    return(
        <div className={css.container}>
            <div className={css.title}>
            <h1>Profile</h1>
            <button className={css.LogoutBtn} onClick={handleLogout}>Logout</button>
            </div>
            
            {/* map all the value in the array props.user */}
            {
                props.user.map((user)=>
                {
                    if(user.email==xy)
                    {
                    return(
                        <div className={css.content}>
                            <h4>Name: <span style={{fontWeight:"normal",color:"black"}}>{user.name}</span></h4>
                            <h4>Email: <span style={{fontWeight:"normal",color:"black"}}>{user.email}</span></h4>
                            <h4>Phone Number: <span style={{fontWeight:"normal",color:"black"}}>{user.phone}</span></h4>
                        </div>
                    )
                    }
                    else{
                        <div>No Data Available</div>
                    }
                }
                )
            }
            <Toaster/>
        </div>
    )
}

// export const getServerSideProps =async()=>
// {
//   const query='*[_type == "underbelly"]'
//   const ub =await client.fetch(query)
//   return{
//     props:{ub}
//   }
// }