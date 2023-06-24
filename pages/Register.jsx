import Layout from "../components/Layout"
import css from "../styles/Login.module.css"
import { useState, useEffect } from "react";
import Link from 'next/link';
// import Lottie from "react-lottie";
import loginAnim from "../assets/Login.json";
export default function Register() {

    const [emailFill, setemailFill] = useState("block");
    const [emailStyle, setEmailStyle] = useState("block");
    const [paswdFill, setPaswdFill] = useState("block");
    const [passwordStyle, setPasswrdStyle] = useState("block");

    const [name, setname] = useState(false);
    const [phone, setphone] = useState(false);



    // email validation

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
    function isPhone(event) {
        if (event.target.value != "") {
            console.log(phone)
            setphone(true);
        }
        else {
            setphone(false);
        }
    }
    function isUser(event) {
        if (event.target.value != "") {
            setname(true);
        }
        else {
            setname(false);
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
        if (phone == true) {
            document.getElementsByClassName("phone")[0].style.display = 'none';
        }
        else{
            document.getElementsByClassName("phone")[0].style.display ='block';
        }

        if (name == true) {
            document.getElementsByClassName("email2")[0].style.display = 'none';
        }
        else{
            document.getElementsByClassName("email2")[0].style.display ='block';
        }
        
    }, [emailStyle, passwordStyle, phone,name]);

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: loginAnim,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice",
    //     },
    // };
    return (
        <Layout>
            <div className={css.loginbox}>
                <form action="">
                <div className={css.headerTag}>
                        <h2 className={css.title}>Register</h2>
                        {/* <Lottie className={css.icon} options={defaultOptions} height={100} width={100} /> */}
                    </div>

                    <div className={css.inputbox}>
                        <span className={css.icon}>
                        </span>
                        <input type="text" onChange={isEmptyName} required />
                        <label style={{ display: emailFill }}>Name</label>
                    </div>
                    <div className={css.inputbox}>
                        <span className={css.icon}>
                        </span>
                        <input type="email" onChange={isUser}required />
                        <label className="email2" style={{}}>Email</label>
                    </div>
                    <div className={css.inputbox}>
                        <span className={css.icon}>
                        </span>
                        <input type="password" onChange={isEmptyPassword} required />
                        <label style={{ display: paswdFill }}>Password</label>
                    </div>
                    <div className={css.inputbox}>
                        <span className={css.icon}>
                        </span>
                        <input  type="text" onChange={isPhone} required />
                        <label className="phone" style={{}}>Phone Number</label>
                    </div>

                    {/* <div className={css.rememberforgot}>
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div> */}

                    <button className={css.loginButton} type="submit">Register</button>
                    <div className={css.registerlink}>
                        <p>Already have an account? <Link href="/Login"><span className={css.refer}>Login</span></Link></p>
                    </div>
                </form>
            </div>
        </Layout>
    )
} 