
import { FaUserEdit } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";


const genders = ["Male", "Female", "Other"]

export default function EditProfile(props) {

    const user = props.user;

    let obj = {

        gender: null,
        about: null,
        contactNumber: null,
        city: null,
        bankAccount: null,

    }

    const [profileform, setprofileForm] = useState(obj);

    const submitProfileForm = async (e) => {
        e.preventDefault();


        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/profile/update-profile`,
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(profileform),
                    credentials: "include"
                }
            );

            if (Response.ok) {
                toast.success("Profile updated successfully");


            } else {
                toast.error("Profile not updated.");
            }

        } catch (error) {
            toast.error("Profile not updated in error.");
            console.log("Error Message - ", error.message)
        }
    }

    function changeHandler(event) {
        setprofileForm(
            (prev) => {
                return {
                    ...prev,
                    [event.target.name]: event.target.value,
                }
            }
        );
    }



    return (
        <>
            <form onSubmit={submitProfileForm} className="w-full">
                {/* Profile Information */}
                <div className=" mt-4   flex flex-col gap-y-2 rounded-md border-[1px] border-richblack-100 bg-lightcream p-4 px-12 CardShadow">
                    <h2 className="text-lg font-semibold text-purple">
                        Profile Information
                    </h2>
                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="firstName" className="lable-style text-richblack-800">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                onChange={changeHandler}
                                placeholder="Enter First Name"
                                className="bg-white border border-richblack-100 rounded-md w-full p-[10px] text-richblack-800
                         placeholder:text-richblack-100"

                                defaultValue={user?.firstName}
                            />

                        </div>
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="lastName" className="lable-style text-richblack-800">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                onChange={changeHandler}
                                placeholder="Enter Last Name"
                                className="bg-white border border-richblack-100 rounded-md w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"

                                defaultValue={user?.lastName}
                            />

                        </div>
                    </div>

                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="dateOfBirth" className="lable-style text-richblack-800">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                id="dateOfBirth"
                                onChange={changeHandler}
                                className="bg-white border border-richblack-100 rounded-md w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"

                                defaultValue={user?.personalInfo?.dateOfBirth}
                            />

                        </div>
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="gender" className="lable-style text-richblack-800">
                                Gender
                            </label>
                            <select
                                type="text"
                                name="gender"
                                id="gender"
                                onChange={changeHandler}
                                className="bg-white border border-richblack-100 rounded-md w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"

                                defaultValue={user?.personalInfo?.gender}
                            >
                                {genders.map((ele, i) => {
                                    return (
                                        <option key={i} value={ele}>
                                            {ele}
                                        </option>
                                    )
                                })}
                            </select>

                        </div>
                    </div>

                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="contactNumber" className="lable-style text-richblack-800">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                name="contactNumber"
                                id="contactNumber"
                                onChange={changeHandler}
                                placeholder="Enter Contact Number"
                                className="bg-white border border-richblack-100 rounded-md w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"

                                defaultValue={user?.personalInfo?.contactNumber}
                            />

                        </div>
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="about" className="lable-style text-richblack-800">
                                About
                            </label>
                            <input
                                type="text"
                                name="about"
                                id="about"
                                onChange={changeHandler}
                                placeholder="Enter Your Details"
                                className="bg-white border border-richblack-100 rounded-md w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"

                                defaultValue={user?.personalInfo?.about}
                            />

                        </div>
                    </div>

                    <div className="flex flex-col gap-5 lg:flex-row">
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="bankAccount" className="lable-style text-richblack-800">
                                Bank A/C Number (with IFSC)
                            </label>
                            <input
                                type="tel"
                                name="bankAccount"
                                id="bankAccount"
                                onChange={changeHandler}
                                placeholder="XXXXXXXXXXXX"
                                className="bg-white border border-richblack-100 rounded-md w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"

                                defaultValue={user?.personalInfo?.bankAccount}
                            />

                        </div>
                        <div className="flex flex-col gap-2 lg:w-[48%]">
                            <label htmlFor="city" className="lable-style text-richblack-800">
                                City
                            </label>
                            <input
                                type="text"
                                required
                                name="city"
                                id="city"
                                onChange={changeHandler}
                                placeholder="Enter City"
                                className="bg-white border border-richblack-100 rounded-md w-full p-[10px] text-richblack-800
                    placeholder:text-richblack-100"

                                defaultValue={user?.personalInfo?.city}
                            />

                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-2">


                    <button type="submit" className=" flex gap-x-2 items-center m-2 p-2 px-4 font-bold text-richblack-5 
                                                                                  text-sm h-10 rounded-lg simplebutton grb1">
                        <FaUserEdit></FaUserEdit>
                        Save</button>
                </div>
            </form>
        </>
    )
}