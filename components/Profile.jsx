import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import { client } from "../lib/client"
import { useState } from "react";
import css from "../styles/Profile.module.css";

export default function Profile(props) {
    const router = useRouter();
    const handleLogout = (e) => {
        toast.success("Logout Successfull")
        localStorage.removeItem('email');
        router.push("/Login");
    }
    const xy = typeof window !== 'undefined' && localStorage.getItem('email');
    console.log("Check"+props.order[0].cancel)
    return (
        <div className={css.container}>
            <div className={css.title}>
                <h1>Profile</h1>
                <button className={css.LogoutBtn} onClick={handleLogout}>Logout</button>
            </div>
            {
                props.user.map((user) => {
                    if (user.email == xy) {
                        return (
                            <div className={css.content}>
                                <h4>Name: <span style={{ fontWeight: "normal", color: "black" }}>{user.name}</span></h4>
                                <h4>Email: <span style={{ fontWeight: "normal", color: "black" }}>{user.email}</span></h4>
                                <h4>Phone Number: <span style={{ fontWeight: "normal", color: "black" }}>{user.phone}</span></h4>
                            </div>
                        )
                    }
                    else {
                        <div>No Data Available</div>
                    }
                }
                )
            }
            <div className={css.List}>
                <h3>Order List</h3>

                <div className={css.listCard}>
                    {
                        props.order.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt)).map((order) => {
                            if (order.email == xy.toLowerCase()) {
                                return (
                                    <div className={css.card}>
                                        <p>Order Id: <b>{order._id}</b></p>
                                        {/* if order.status=4 set statusBadge background color to green */}

                                        <p className={css.statusBadge} style={order.status == 4 ? { background: '#3ac83a', color: 'white' } : order.cancel=='true'?{background: 'red', color: 'white'}:{}}>
                                            {
                                                order.cancel == 'true' ?
                                                    <div>Rejected</div>
                                                    :
                                                    order.status == 4 ?
                                                        <div>Delivered</div>
                                                        :
                                                        order.status == 3 ?
                                                            <div>Onway</div>
                                                            :
                                                            order.status == 2 ?
                                                                <div>Cooking</div>
                                                                :
                                                                order.status == 1 ?
                                                                    <div>Under Process</div>
                                                                    :
                                                                    <div></div>
                                            }
                                        </p>
                                        <h3>{order.foodname}</h3>
                                        <p>{order.address}</p>
                                        <p>
                                            {order.method == 0 ?
                                                <div>Payment Mode:  <b>COD</b></div> :
                                                <div>Payment Mode:  <b>Online</b></div>
                                            }
                                        </p>
                                        <hr />
                                        <span className={css.cardBottom}>
                                            <p>{new Date(order._createdAt).toLocaleDateString('en-GB')} at {new Date(order._createdAt).toLocaleTimeString()}</p>
                                            <p style={{ fontWeight: 'bold' }}>Rs.{order.total}</p>
                                        </span>

                                    </div>
                                )
                            }
                        }
                        )
                    }
                </div>

            </div>

            <Toaster />
        </div>
    )
}