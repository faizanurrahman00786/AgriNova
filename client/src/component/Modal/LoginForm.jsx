
import logo from "../../assets/logo.png";
import { useState } from "react";
import { toast } from "sonner";

function LoginForm(props) {

    const { setModal, setloginModal, setsignupModal, setpasswordModal, setUser, setisLogin } = props;

    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
        }
    )

    function changeHandler(event) {
        setFormData(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
            }
        );
    }

    async function submitHandler(e) {
        e.preventDefault();

        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                    credentials: "include"
                }
            );

            if (Response.ok) {
                const data = await Response.json();
                setisLogin(true);
                setUser(data.user);
                setModal(false);
                toast.success("Logged In successfully");

            } else {
                toast.error("Invalid Email or Password.");
            }
        }
        catch (error) {
            toast.error("Failed to Logged In.");
            console.error("Failed to Logged In", error);
        }
    }

    function signupModalHandler() {
        setloginModal(false);
        setsignupModal(true);
    }

    function passwordModalHandler() {
        setloginModal(false);
        setpasswordModal(true);
    }

    return (
        <div className="w-[28%] h-2/3 rounded-lg mt-[10%] p-4 flex flex-col items-center justify-between form select-none">

            <div className="h-1/5 w-full flex flex-col justify-start items-center">
                <img src={logo} alt="/logo" className="w-2/5"></img>
                <p className="text-2xl font-serif text-caribbeangreen-700 font-semibold">Log In to Your Account</p>
            </div>

            <div className=" flex flex-col gap-y-1 px-6">

                <form onSubmit={submitHandler}>
                    <label htmlFor="email" className="text-[0.875rem] text-white mb-1 p-1 leading-[1.375rem] font-serif">Email Address
                        <sup className="text-pink-400">*</sup></label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        // value={formData.email}
                        placeholder="Enter your E-mail address"
                        onChange={changeHandler} className="bg-darkcream  rounded-lg w-full p-[12px] text-richblack-900
                                    placeholder:text-richblack-100 outline-none">

                    </input>

                    <label htmlFor="password" className="text-[0.875rem] text-white mb-1 p-1 leading-[1.375rem] font-serif">Password
                        <sup className="text-pink-200">*</sup></label>
                    <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        // value={formData.password}
                        placeholder="***************"
                        onChange={changeHandler} className="bg-darkcream rounded-lg w-full p-[12px] text-richblack-900
                                    placeholder:text-richblack-100 outline-none">

                    </input>


                    <div><button className="h-10 rounded-lg px-4 mt-6 w-full
                     text-richblack-5 grb1 loginbutton">Login</button></div>

                </form>

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-richblack-500"></div>
                    <p className="text-richblack-600 font-medium leading-[1.375rem]">OR</p>
                    <div className="h-[1px] w-full bg-richblack-500"></div>
                </div>
                <div className="flex flex-col items-center gap-y-1 text-richblack-800">
                    <button onClick={passwordModalHandler} className="hover:text-white">Forgot Password?</button>
                    <button className="hover:text-white" onClick={signupModalHandler}>New User? Sign Up</button>
                </div>

            </div>
        </div>
    )
}
export default LoginForm;