import logo from "../../assets/logo.png";
import { toast } from "sonner";

function SignupForm(props) {

    const { setsignupModal, setotpModal, formData, setFormData } = props;


    async function submitHandler(e) {
        e.preventDefault();
       

        try {

            if (formData.password !== formData.confirmPassword) {
                toast.error("Password not matched");


            }
            else {

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
                    setsignupModal(false);
                    setotpModal(true);

                } else {
                    console.log("Failed to save user's data", await Response.json());
                }

            }
        }

        catch (error) {
            console.error("Error in send the otp.", error);
        }
    };


    

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

    return (
        <div className="w-[28%] h-[70%] rounded-lg mt-[10%] p-4 flex flex-col items-center justify-between form select-none">

            <div className="h-1/5 w-full flex flex-col justify-start items-center">
                <img src={logo} alt='/logo' className="w-2/5"></img>
                <p className="text-2xl font-serif text-caribbeangreen-700 font-semibold">Create New Account</p>
            </div>

            <div className="w-full flex flex-col gap-y-1 px-6">

                <form onSubmit={submitHandler}>

                    <div className="flex gap-x-3">
                        <div>
                            <label htmlFor="firstname" className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-serif">First Name
                                <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type="text"
                                name="firstName"
                                id="firstname"
                                // value={formData.email}
                                placeholder="Enter First Name"
                                onChange={changeHandler}
                                className="bg-darkcream space-y-12 rounded-lg w-full p-[12px]
                            placeholder:text-richblack-100 text-richblack-800 outline-none"></input>
                        </div>
                        <div>
                            <label htmlFor="lastname" className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-serif">Last Name
                                <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type="text"
                                name="lastName"
                                id="lastname"
                                // value={formData.email}
                                placeholder="Enter Last Name"
                                onChange={changeHandler}
                                className="bg-darkcream space-y-12 rounded-lg w-full p-[12px]
                            placeholder:text-richblack-100 text-richblack-800 outline-none"></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-serif">Email Address
                            <sup className="text-pink-200">*</sup></label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            // value={formData.email}
                            placeholder="Enter your E-mail address"
                            onChange={changeHandler}
                            className="bg-darkcream space-y-12 rounded-lg w-full p-[12px]
                        placeholder:text-richblack-100 text-richblack-800 outline-none"></input>
                    </div>
                    <div className="flex gap-x-3">
                        <div className="w-1/2">
                            <label htmlFor="password" className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-serif">Password
                                <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type="password"
                                name="password"
                                id="password"
                                // value={formData.password}
                                placeholder="Enter Password"
                                onChange={changeHandler}
                                className="bg-darkcream space-y-12 rounded-lg w-full p-[12px]
                            placeholder:text-richblack-100 text-richblack-800 outline-none"></input>
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="cnfpassword" className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-serif">Confirm Password
                                <sup className="text-pink-200">*</sup></label>
                            <input
                                required
                                type="password"
                                name="confirmPassword"
                                id="cnfpassword"
                                // value={formData.password}
                                placeholder="Confirm Password"
                                onChange={changeHandler}
                                className="bg-darkcream space-y-12 rounded-lg w-full p-[12px]
                            placeholder:text-richblack-100 text-richblack-800 outline-none"></input>
                        </div>

                    </div>

                    <div>
                        <label htmlFor="accountType" className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] font-serif">Account Type
                            <sup className="text-pink-200">*</sup></label>
                        <select
                            required
                            name="accountType"
                            id="accountType"
                            // value={formData.password}
                            onChange={changeHandler}
                            className="bg-darkcream space-y-12 rounded-lg w-full p-[12px] outline-none">

                            <option className="text-richblack-100" value={null}>
                                Select Type:</option>
                            <option className="text-richblack-800" value={"farmer"}>Farmer</option>
                            <option className="text-richblack-800" value={"buyer"}>Bulk Buyer/Retailer</option>

                        </select>

                    </div>

                    <div><button className="h-10 rounded-lg px-4 my-5 w-full
                     text-richblack-5 grb1 loginbutton" onSubmit={submitHandler}>Create Account</button></div>

                </form>


            </div>
        </div>
    )
}
export default SignupForm;