
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { toast } from "sonner";


function VerifyEmail(props) {

    const { setloginModal, setotpModal, setsignupModal, formData, setFormData } = props;

   
    async function resendOtp() {

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
            console.log("Failed to send OTP", await Response.json());
        }

    }


   async function handleVerifyAndSignup(e) {
        e.preventDefault();


        const Response = await fetch(
            `${process.env.REACT_APP_BASE_URL}/auth/signup`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }
        );


        if (Response.ok) {
            toast.success("Account created successfully");
            setotpModal(false);
            setloginModal(true);

        } else {
            toast.error("Invalid Email or User already exist")
            console.log("Failed to save user's data", await Response.json());
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

    function modalHandler() {
        setotpModal(false);
        setsignupModal(true);
    }


    return (
        <div className="w-[28%] rounded-lg mt-[10%] p-4 flex flex-col items-center justify-between form select-none">

            <div className="max-w-[500px] p-4 lg:p-8">
                <h1 className="text-richblack-25 font-semibold text-[1.875rem] leading-[2.375rem]">
                    Verify Email
                </h1>
                <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-50 font-serif">
                    A verification code has been sent to you. Enter the code below.
                </p>
                <form onSubmit={handleVerifyAndSignup}>

                    <input
                        required
                        type="text"
                        name="otp"
                        placeholder="**************"
                        onChange={changeHandler}
                        className="w-full bg-darkcream outline-none text-center rounded-[0.75rem] p-[10px]
                      placeholder:text-richblack-100 text-richblack-800 text-xl"
                    >
                    </input>

                    <div><button className="h-10 rounded-lg px-4 mt-6 w-full
                     text-richblack-5 grb1 loginbutton">Verify OTP</button></div>

                </form>
                <div className="mt-3 flex items-center justify-between">

                    <button onClick={modalHandler} className="text-richblack-5 flex  items-center gap-x-2 hover:text-purple">
                        <BiArrowBack /> Back To Signup
                    </button>

                    <button
                        className="flex items-center text-richblack-5 gap-x-2 hover:text-purple"
                        onClick={resendOtp}>

                        <RxCountdownTimer />
                        Resend OTP
                    </button>
                </div>
            </div>

        </div>
    );
}

export default VerifyEmail;