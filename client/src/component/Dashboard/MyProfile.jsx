import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserEdit } from "react-icons/fa";
import profileImage from "../../assets/left_person.png";
import { BsPersonDash } from 'react-icons/bs';



const MyProfile = (props) => {

    const user = props.user;

    const navigate = useNavigate();

    return (
        <div className='w-[60%] flex flex-col items-center justify-start gap-y-6 py-2 mt-5'>

           
            <div className='flex flex-col lg:flex-row justify-between bg-lightcream border border-richblack-100 w-full rounded-md p-4 px-12 CardShadow'>

                <div className='flex items-start gap-x-4'>
                    <img
                        src={user?user.image:profileImage}
                        alt={""}
                        className='aspect-square w-[100px] h-[100px] mr-4 rounded border border-richblack-200 object-contain' />

                    <div className='text-caribbeangreen-700 text-2xl font-bold font-serif'>
                        <p> {user?.firstName + " " + user?.lastName} </p>
                       
                        <p className='text-sm font-thin'>{user?.accountType}</p>
                    </div>
                </div>


                <button onClick={() => navigate("/user/dashboard/setting")} className=" flex gap-x-2 items-center m-2 p-2 px-4 font-bold text-richblack-5 
                         text-sm h-10 rounded-lg simplebutton grb1">
                    <FaUserEdit></FaUserEdit>
                    Edit</button>


            </div>



           
            <div className='flex flex-col bg-lightcream border border-richblack-100 w-full rounded-md p-4 px-12 CardShadow'>

                <div className='flex flex-col lg:flex-row justify-between items-center font-bold text-richblack-25'>

                    <p className='text-purple flex items-center gap-x-2'><BsPersonDash className='text-xl'></BsPersonDash> Personal Details</p>

                    <button onClick={() => navigate("/user/dashboard/setting")} className=" flex gap-x-2 items-center m-2 p-2 px-4 font-bold text-richblack-5 
                                 text-sm h-10 rounded-lg simplebutton grb1">
                        <FaUserEdit></FaUserEdit>
                        Edit</button>

                </div>

                <div className='flex flex-col lg:flex-row gap-x-16 items-baseline'>
                    <div>
                        <div>
                            <p className='text-blue-400 font-semibold'>First Name:  <span className='text-caribbeangreen-800 align-text-top font-serif font-normal'> {user?.firstName}</span></p>
                           
                        </div>
                        <div className='mt-4'>
                            <p className='text-blue-400 font-semibold mt-2'>Email:  <span className='text-caribbeangreen-800 align-text-top font-serif font-normal'> {user?.email}</span></p>
                           
                        </div>
                        <div className='mt-4'>
                            <p className='text-blue-400 font-semibold mt-2'>Gender:<span className='text-caribbeangreen-800 align-text-top font-serif font-normal'> {user?.personalInfo?.gender?? "No mentioned"}</span></p>

                        </div>
                        <div className='mt-4'>
                            <p className='text-blue-400 font-semibold mt-2'>Role:  <span className='text-caribbeangreen-800 align-text-top font-serif font-normal'> {user?.accountType}</span></p>
                           
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-blue-400 font-semibold mt-2'>Last Name: <span className='text-caribbeangreen-800 align-text-top font-serif font-normal'> {user?.lastName}</span></p>
                            
                        </div>
                        <div className='mt-4'>
                            <p className='text-blue-400 font-semibold mt-2'>Mobile Number:<span className='text-caribbeangreen-800 align-text-top font-serif font-normal'> {user?.personalInfo?.contactNumber ?? "--"}</span></p>

                        </div>
                        <div className='mt-4'>
                            <p className='text-blue-400 font-semibold mt-2'>Bank A/C No:<span className='text-caribbeangreen-800 align-text-top font-serif font-normal'> {user?.personalInfo?.bankAccount ?? "xxxxxxxxx"}</span></p>
                        </div>
                        <div className='mt-4'>
                            <p className='text-blue-400 font-semibold mt-2'>City: <span className='text-caribbeangreen-800 align-text-top font-serif font-normal'> {user?.personalInfo?.city ??"--"}</span></p>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default MyProfile
