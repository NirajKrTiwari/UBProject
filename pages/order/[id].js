import { client } from '../../lib/client.js';
import Layout from '../../components/Layout';
import css from '../../styles/Order.module.css';
import { UilBill } from '@iconscout/react-unicons';
import Image from 'next/image';
import Cooking from '../../assets/cooking.png';
import Onway from '../../assets/onway.png';
import { UilBox } from '@iconscout/react-unicons';
import Spinner from '../../assets/spinner.svg';
import { useEffect } from 'react';

export const getServerSideProps = async ({ params }) => {
    const query = `*[_type=='order' && _id== '${params.id}']`;
    const order = await client.fetch(query);

    return {
        props: {
            order: order[0]
        }
    }
}

export default function Orders({ order }) {
    useEffect(() => {
        if (order.status > 3) {
            localStorage.clear();
            window.location.href = '/';
        }
    }, [order])

    const deletePin= async (key) => {

        const query = `*[_type=='order' && _id== '${key}']`;
        const order = await client.fetch(query);

        const res = await client.delete(order[0]._id);
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        <Layout>
            <div className={css.container}>
                <div className={css.title}>
                    <span className={css.heading}>
                        Order in Process
                    </span>
                    <button className={css.cancelBtn} onClick={(e) => {
                        e.stopPropagation();
                        deletePin(order._id);
                    }}
                    
                    >Cancel
                    </button>
                </div>
                <div className={css.details}>
                    <div><span>Order ID</span><span>{order._id}</span></div>
                    <div><span>Customer Name</span><span>{order.name}</span></div>
                    <div><span>Phone</span><span>{order.phone}</span></div>
                    <div><span>Address</span><span>{order.address}</span></div>
                    <div><span>Method</span><span>{order.method === 0 ? 'Cash on Delivery' : 'Online Payment(Paid)'}</span></div>
                    <div><span>Total</span><span>Rs. {order.total}</span></div>
                </div>
                <div className={css.statusContainer}>

                    <div className={css.status}>
                        <UilBill width={50} height={50} />
                        <span>Payment</span>
                        {order.method === 0 ?
                            <span className={css.pending}>On Delivery</span>
                            :
                            <span className={css.completed}>Paid</span>
                        }
                    </div>

                    <div className={css.status}>
                        <Image src={Cooking} alt="" width={50} height={50} />
                        <span>Cooking</span>
                        {order.status === 1 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt="" />
                            </div>
                        )}
                        {order.status > 1 && (
                            <span className={css.completed}>Completed</span>
                        )}
                    </div>

                    <div className={css.status}>
                        <Image src={Onway} alt="" width={50} height={50} />
                        <span>OnWay</span>
                        {order.status === 2 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt="" />
                            </div>
                        )}
                        {order.status > 2 && (
                            <span className={css.completed}>Completed</span>
                        )}
                    </div>

                    <div className={css.status}>
                        <UilBox width={50} height={50} />
                        <span>Delivered</span>
                        {order.status === 3 && (
                            <div className={css.spinner}>
                                <Image src={Spinner} alt="" />
                            </div>
                        )}
                        {order.status > 3 && (
                            <span className={css.completed}>Completed</span>
                        )}
                    </div>

                </div>
            </div>
        </Layout>
    )
}
