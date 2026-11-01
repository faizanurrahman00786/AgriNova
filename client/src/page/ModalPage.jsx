
import { useState } from "react";
import LoginForm from "../component/Modal/LoginForm";
import SignupForm from "../component/Modal/SignupForm";
import VerifyEmail from "../component/Modal/VerifyEmail";
import PasswordUpdate from "./PasswordUpdate";

function ModalPage(props) {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
        accountType: "",
        otp: "",
    });

    const { setModal, setUser, setisLogin } = props;

    const [loginModal, setloginModal] = useState(true);
    const [signupModal, setsignupModal] = useState(false);
    const [otpModal, setotpModal] = useState(false);
    const [passwordModal, setpasswordModal] = useState(false);

    function modalHandler() {

    }

    return (
        <div onClick={modalHandler} className="w-full h-screen fixed modal z-10 flex justify-center items-start">

            {loginModal && <LoginForm setloginModal={setloginModal} setsignupModal={setsignupModal} setpasswordModal={setpasswordModal} setModal={setModal} setUser={setUser} setisLogin={setisLogin}></LoginForm>}
            {signupModal && <SignupForm setsignupModal={setsignupModal} setotpModal={setotpModal} formData={formData} setFormData={setFormData}></SignupForm>}
            {otpModal && <VerifyEmail setloginModal={setloginModal} setotpModal={setotpModal} setsignupModal={setsignupModal} formData={formData} setFormData={setFormData}></VerifyEmail>}
            {passwordModal && <PasswordUpdate setModal={setModal}></PasswordUpdate>}

        </div>
    )
}
export default ModalPage;