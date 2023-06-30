import Layout from "../components/Layout"
import css from "../styles/Login.module.css"
import { useState, useEffect } from "react";
import Link from 'next/link';
import Lottie from "react-lottie";
import loginAnim from "../assets/Login.json";
import Head from "next/head";
import favicon from "./favicon.ico"
import { createRegistration } from "../lib/registration";
import { useRouter } from 'next/router';
// import toast, { Toaster } from 'react-hot-toast';
import cogoToast from 'cogo-toast';



export default function Register() {
    const router = useRouter();
    const [FormData, setFormData] = useState({});
    const [emailFill, setemailFill] = useState("block");
    const [emailStyle, setEmailStyle] = useState("block");
    const [paswdFill, setPaswdFill] = useState("block");
    const [passwordStyle, setPasswrdStyle] = useState("block");

    const [nameCheck, setnameCheck] = useState(false);
    const [phoneCheck, setphoneCheck] = useState(false);


    // Data Storing in State
    const [name, setNameData] = useState("");
    const [email, setEmailData] = useState("");
    const [password, setPassData] = useState("");
    const [phone, setphoneData] = useState("");

    // email validation

    function isEmptyName(event) {
        if (event.target.value != "") {
            setNameData(event.target.value)
        }
        if (event.target.value != "") {
            setEmailStyle("none");
        }
        else {
            setEmailStyle("block");
        }
    }

    function isEmptyPassword(event) {
        if (event.target.value != "") {
            setPassData(event.target.
                value)
        }
        if (event.target.value != "") {
            setPasswrdStyle("none");
        }
        else {
            setPasswrdStyle("block");
        }
    }

    function isPhone(event) {
        if (event.target.value != "") {
            setphoneData(event.target.
                value)
        }

        if (event.target.value != "") {
            setphoneCheck(true);
        }
        else {
            setphoneCheck(false);
        }
    }

    function isUser(event) {
        if (event.target.value != "") {
            setEmailData(event.target.value.toLowerCase())
        }
        if (event.target.value != "") {
            setnameCheck(true);
        }
        else {
            setnameCheck(false);
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
        if (phoneCheck == true) {
            document.getElementsByClassName("phone")[0].style.display = 'none';
        }
        else {
            document.getElementsByClassName("phone")[0].style.display = 'block';
        }

        if (nameCheck == true) {
            document.getElementsByClassName("email2")[0].style.display = 'none';
        }
        else {
            document.getElementsByClassName("email2")[0].style.display = 'block';
        }

    }, [emailStyle, passwordStyle, phoneCheck, nameCheck]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(
        ()=>
        {
          // console.log(FormData)
        },[FormData]
      )
      
    const handleSubmit = async (e) => {        
        if (name != "" && email != "" && phone.length == 10 && password != "" && agreeCheck != false) {
            setFormData({ name, email, password, phone })
            // console.log(FormData);
            cogoToast.success("Registered Successfully");
            e.stopPropagation();
            e.preventDefault();
            const res = await createRegistration(FormData);
            // console.log(res);
            router.push('/Login');
        }
        else {
            // if(phone.length!=10)
            // {
            //     e.preventDefault();
            //     cogoToast.error("Enter valid Phone number");
            // }
            // else{
            e.preventDefault();
            cogoToast.error("Fill up all the details");
            // }
        }

    }



    const [agreeCheck, setagreeCheck] = useState(false)
    function isAgree(e) {
        if (e.target.checked == true) {
            setagreeCheck(true);
            setFormData({ name, email, password, phone });
            // console.log(FormData);
        }
        else {
            setagreeCheck(false);
        }
    }

    // const handleSubmit = () => {
    //     if (phone.length == 10) {

    //     }
    //     // else{
    //     //     toast.error("Enter valid Phone number");
    //     //     document.getElementById("phone").focus();
    //     // }
    //     // setFormData({name, email, password, phone})
    //     console.log(phone.length);
    // }

    return (
        <Layout>
            <Head>
                <title>Under Belly | Registration</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" type="image/x-icon" href={favicon.src} />
            </Head>
            <div className={css.loginbox}>
                <form action="">
                    <div className={css.headerTag}>
                        <h2 className={css.title}>Register</h2>
                        <Lottie className={css.icon} options={defaultOptions} height={100} width={100} />
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
                        <input type="email" onChange={isUser} required />
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
                        <input id="phone" type="text" onChange={isPhone} required />
                        <label className="phone" style={{}}>Phone Number</label>
                    </div>

                    {/* <div className={css.rememberforgot}>
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div> */}
                    <input type="checkbox" id="agree" name="agree" onChange={isAgree} required></input>&nbsp;Confirm you want to register<br></br>
                    <button style={{ marginTop: '1rem' }} className={css.loginButton} onClick={handleSubmit} type="submit">Register</button>

                    <div className={css.registerlink}>
                        <p>Already have an account? <Link href="/Login"><span className={css.refer}>Login</span></Link></p>
                    </div>
                </form>
            </div>
            {/* <Toaster /> */}
        </Layout>
    )
} 