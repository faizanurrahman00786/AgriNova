
import { useState } from "react"
import { toast } from "sonner"


function PasswordUpdate(props) {

    const setModal= props.setModal;

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
        email: "",
        otp: "",
    })

    async function optSender(e) {
        e.preventDefault();

        try {

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/auth/sendotp`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: formData.email })
                }
            );


            if (Response.ok) {
                toast.success("Otp sent successfully");

            } else {
                toast.error("Failed to send OTP");
                console.log("Failed to send otp", await Response.json());
            }

        }


        catch (error) {
            console.error("Error in send the OTP.", error);
        }
    };

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/auth/reset-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );


            if (Response.ok) {
                toast.success("Password changed");
    

            } else {
                toast.error("Failed to change password.");
            }
        }
        catch (error) {
            console.error("Failed to change password", error);
        }
        setModal(false);


    }

    return (
        <div className="w-[28%] h-[70%] rounded-lg mt-[10%] p-4 flex flex-col items-center justify-between form select-none">

            <div className="w-full flex flex-col px-6">
               
                <p className="mb-2 text-[1rem] leading-[1.500rem] text-richblack-50 font-serif">
                    Almost done. Enter your new safe and secure password.
                </p>

                <form onSubmit={handleOnSubmit} className="flex flex-col">

                    <label className="relative">
                        <p className="px-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-serif">
                            Email <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="email"
                            onChange={handleOnChange}
                            placeholder="Enter Email:"
                            className="w-full bg-darkcream rounded-lg outline-none p-[10px]
                             placeholder:text-richblack-100 text-richblack-900"
                        />

                    </label>

                    <button
                        onClick={optSender}
                        className="h-9 w-1/4 rounded-lg px-1 mt-2
                     text-richblack-5 text-sm grb2 loginbutton"
                    >
                        Send OTP
                    </button>

                    <label className="relative mt-2">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-serif">
                            OTP: <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="otp"
                            onChange={handleOnChange}
                            placeholder="**********"
                            className="w-full bg-darkcream rounded-lg outline-none p-[10px]
                             placeholder:text-richblack-100 text-richblack-900 text-md"
                        />

                    </label>

                    <label className="relative mt-2">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-serif">
                            New Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            className="w-full bg-darkcream rounded-lg outline-none p-[10px]
                             placeholder:text-richblack-100 text-richblack-900"
                        />
                    </label>

                    <label className="relative mt-2 block">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5 font-serif">
                            Confirm New Password <sup className="text-pink-200">*</sup>
                        </p>
                        <input
                            required
                            type="password"
                            name="confirmPassword"
                            onChange={handleOnChange}
                            placeholder="Confirm Password"
                            className="w-full bg-darkcream rounded-lg outline-none p-[10px]
                             placeholder:text-richblack-100 text-richblack-900"
                        />

                    </label>

                    <div><button className="h-10 rounded-lg px-4 mt-6 w-full
                     text-richblack-5 grb1 loginbutton">Update Password</button></div>

                </form>

                {/* <div className="mt-2 flex items-center justify-between">
                    <Link to="/login">
                        <p className="flex items-center gap-x-2 hover:text-richblack-50">
                            <BiArrowBack /> Back To Login
                        </p>
                    </Link>
                </div> */}

            </div>

        </div>
    )
}

export default PasswordUpdate;