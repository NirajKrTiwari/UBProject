import Layout from "../components/Layout";
import css from "../styles/Login.module.css";
import { useState, useEffect } from "react";
// import Lottie from "react-lottie";
import loginAnim from "../assets/Login.json";
import Link from 'next/link';
import Head from "next/head";
import favicon from "./favicon.ico"
import { client } from "../lib/client"
import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import Profile from "../components/Profile";

export default function Login({ user, order}) {
    const router = useRouter();
    const [emailFill, setemailFill] = useState("block");
    const [emailStyle, setEmailStyle] = useState("block");
    const [paswdFill, setPaswdFill] = useState("block");
    const [passwordStyle, setPasswrdStyle] = useState("block")
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    console.log(user);
    console.log(order);
    function isEmptyName(event) {
        setEmail(event.target.value);
        if (event.target.value != "") {
            setEmailStyle("none");
        }
        else {
            setEmailStyle("block");
        }
    }

    function isEmptyPassword(event) {
        setpassword(event.target.value);
        if (event.target.value != "") {
            setPasswrdStyle("none");
        }
        else {
            setPasswrdStyle("block");
        }
    }

    useEffect(() => {
        if (emailStyle == 'none') {
            setemailFill('none')
        }
        else {
            setemailFill('block')
        }

        if (passwordStyle == 'none') {
            setPaswdFill('none');
        }
        else {
            setPaswdFill('block');
        }
    }, [emailStyle, passwordStyle]);

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: loginAnim,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice",
    //     },
    // };


    const handleSubmit = (e) => {
        e.preventDefault();
        const emailData = email;
        const passwordData = password;
        const userFound = user.find((user) => user.email == emailData && user.password == passwordData);
        //clear email local storage
        localStorage.removeItem('email');
        if (userFound) {
            console.log("User Found");
            e.preventDefault();
            typeof window !== 'undefined' && localStorage.setItem('email', emailData);
            toast.success("Successfully Logged In")
            router.push("/");
        }
        else {
            e.preventDefault();
            toast.error("Incorrect Email or Password")
            console.log("User Not Found");
        }
        console.log(typeof window !== 'undefined' && localStorage.getItem('email'));
    }

    // const [Order,setOrder]=useState(
    //     typeof window !== 'undefined' && localStorage.getItem('order')
    // )

    return (
        <Layout>
            <Head>
                {typeof window !== 'undefined' && localStorage.getItem('email') == null ? <title>Under Belly | Login </title>
                    :
                    <title>Under Belly | Profile </title>
                }
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" type="image/x-icon" href={favicon.src} />
            </Head>

            {typeof window !== 'undefined' && localStorage.getItem('email') == null ?

                <div className={css.loginbox}>
                    <form action="">
                        <div className={css.headerTag}>
                            <h2 className={css.title}>Login</h2>
                            {/* <Lottie className={css.icon} options={defaultOptions} height={100} width={100} /> */}
                        </div>


                        <div className={css.inputbox}>
                            <span className={css.icon}>
                            </span>
                            <input type="email" onChange={isEmptyName} required />
                            <label style={{ display: emailFill }}>Email</label>
                        </div>

                        <div className={css.inputbox}>
                            <span className={css.icon}>

                            </span>
                            <input type="password" onChange={isEmptyPassword} required />
                            <label style={{ display: paswdFill }}>Password</label>
                        </div>

                        {/* <div className={css.rememberforgot}>
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div> */}

                        <button className={css.loginButton} type="submit" onClick={handleSubmit}>Login</button>
                        <div className={css.registerlink}>
                            <p>Don&apos;t have an account? <Link href="/Register"><span className={css.refer}>Register</span></Link></p>
                        </div>
                    </form>
                </div>
                :
                <div>
                    <Profile user={user} order={order}/>
                </div>
            }
            <Toaster />
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "user"]'
    const query2= '*[_type == "order"]'
    const user = await client.fetch(query)
    const order = await client.fetch(query2)
    return {
        props: {
            user,
            order
            },
    }
}