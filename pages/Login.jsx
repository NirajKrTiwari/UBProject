import Layout from "../components/Layout";
import css from "../styles/Login.module.css";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import loginAnim from "../assets/Login.json";
import Link from 'next/link';
export default function Login() {

    const [emailFill, setemailFill] = useState("block");
    const [emailStyle, setEmailStyle] = useState("block");
    const [paswdFill, setPaswdFill] = useState("block");
    const [passwordStyle, setPasswrdStyle] = useState("block")

    function isEmptyName(event) {
        if (event.target.value != "") {
            setEmailStyle("none");
        }
        else {
            setEmailStyle("block");
        }
    }

    function isEmptyPassword(event) {
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

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Layout>
            <div className={css.loginbox}>
                <form action="">
                    <div className={css.headerTag}>
                        <h2 className={css.title}>Login</h2>
                        <Lottie className={css.icon} options={defaultOptions} height={100} width={100} />
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

                    <button className={css.loginButton} type="submit">Login</button>
                    <div className={css.registerlink}>
                        <p>Don't have an account? <Link href="/Register"><span className={css.refer}>Register</span></Link></p>
                    </div>
                </form>
            </div>
        </Layout>
    )
} 