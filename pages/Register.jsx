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
import { client } from "../lib/client"
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



    //sanity search query with the help of EmailData
    const query = `*[_type == "user" && email == "${email}"]`;
    const [registration, setRegistration] = useState([]);
    useEffect(() => {
        client.fetch(query).then((registration) => {
            setRegistration(registration);
        });
    }, [query]);

    //  console.log('registrations', registration[0])
    //  console.log(registration.length)


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
    const [phoneLen, setPhoneLen] = useState(true);

    function isPhone(event) {
        if (event.target.length < 1 || event.target.value.length == 10) {
            setPhoneLen(true);
        }
        else {
            setPhoneLen(false)
        }
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
        if (phoneLen == true) {
            document.getElementById("warning").style.display = 'none';
        }
        else {
            document.getElementById("warning").style.display = 'block';
        }

    }, [emailStyle, passwordStyle, phoneCheck, nameCheck, phoneLen]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnim,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(
        () => {

        }, [FormData]
    )

    const handleSubmit = async (e) => {
        console.log(email)
        console.log(FormData)
        if (registration.length > 0) {
            e.stopPropagation();
            e.preventDefault();
            cogoToast.error("Email Alredy Exists")
            document.getElementById("agree").checked = false;
        }
        else if (name != "" && email != "" && phone.length == 10 && password != "" && agreeCheck != false) {
            setFormData({ name, email, password, phone })
            // console.log(FormData);
            cogoToast.success("Registered Successfully");
            e.stopPropagation();
            e.preventDefault();
            const res = await createRegistration(FormData);
            // // console.log(res);
            router.push('/Login');
        }
        else {
            e.preventDefault();
            document.getElementById("agree").checked = false;
            cogoToast.error("Fill up all the details");

        }

    }



    const [agreeCheck, setagreeCheck] = useState(false)
    function isAgree(e) {
        if (e.target.checked == true) {
            setagreeCheck(true);
            setFormData({ name, email, password, phone });
            console.log(FormData);
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
                        <label className="phone" >Phone Number</label>
                    </div>
                    <p className={css.warningMsg} id="warning" style={{ display: 'none' }}>Enter Valid Phone Number</p>
                    <div className={css.confirmationBox}>
                        <input type="checkbox" id="agree" name="agree" onChange={isAgree} required></input>&nbsp;Confirm you want to register<br></br>
                    </div>
                    <button style={{ marginTop: '1rem' }} className={css.loginButton} onClick={handleSubmit} type="submit">Register</button>
                    <div className={css.registerlink}>
                        <p>Already have an account? <Link href="/Login"><span className={css.refer} style={{ color: "var(--themeRed)" }}>Login</span></Link></p>
                    </div>
                </form>
            </div>
            {/* <Toaster /> */}
        </Layout>
    )
} 
