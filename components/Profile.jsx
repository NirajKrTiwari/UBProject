import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';
export default function Profile()
{
    const router = useRouter();
    const handleLogout=(e)=>
    {
        toast.success("Logout Successfull")
        localStorage.removeItem('email');
        router.push("/");
    }
    return(
        <div>
            Profile
            <button onClick={handleLogout}>Logout</button>
            <Toaster/>
        </div>
    )
}