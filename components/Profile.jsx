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
        router.push("/");
    }
    const xy = typeof window !== 'undefined' && localStorage.getItem('email');
    return (
        <div className={css.container}>
            <div className={css.title}>
                <h1>Profile</h1>
                <button className={css.LogoutBtn} onClick={handleLogout}>Logout</button>
            </div>

            {/* map all the value in the array props.user */}
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




                {/* <table className={css.TableList}>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Food</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.order.map((order) => {
                                if (order.email == xy) {
                                    return (
                                        <tr>
                                            <td>{order._id}</td>
                                            <td>{order.foodname}</td>
                                            <td>{order.total}</td>
                                            <td>
                                                {new Date(order._createdAt).toLocaleDateString()}
                                            </td>
                                            <td>{order.method == 0 ?
                                                <div>COD</div> :
                                                <div>Online</div>
                                            }</td>
                                            <td>
                                                {
                                                    order.status == 4 ?
                                                        <div style={{ color: 'green', fontWeight: 'bold' }}>Delivered</div>
                                                        :
                                                        order.status == 3 ?
                                                            <div>Onway</div>
                                                            :
                                                            order.status == 2 ?
                                                                <div>Cooking</div>
                                                                :
                                                                <div>Under Process</div>
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                                else {
                                    <div>No Data Available</div>
                                }
                            })
                        }
                    </tbody>
                </table> */}




                <div className={css.listCard}>
                    {
                        props.order.map((order) => {
                            if (order.email == xy.toLowerCase()) {
                                return (                       
                                    <div className={css.card}>
                                        {/* convet order.email to lowerCase */}
                                        <h3>{order.foodname}</h3>
                                        <p className={css.statusBadge}>
                                            {
                                                order.status == 4 ?
                                                    <div style={{ color: '#1aa11a', fontWeight: 'bold' }}>Delivered</div>
                                                    :
                                                    order.status == 3 ?
                                                        <div>Onway</div>
                                                        :
                                                        order.status == 2 ?
                                                            <div>Cooking</div>
                                                            :
                                                            <div>Under Process</div>
                                            }
                                        </p>
                                        <p>Order Id: {order._id}</p>
                                        <p>{order.address}</p>
                                        <p>
                                            {order.method == 0 ?
                                                <div>Payment Mode:  <b>COD</b></div> :
                                                <div>Payment Mode:  <b>Online</b></div>
                                            }
                                        </p>
                                        <hr/>
                                        <span className={css.cardBottom}>
                                            <p>{new Date(order._createdAt).toLocaleDateString()} at {new Date(order._createdAt).toLocaleTimeString()}</p>
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