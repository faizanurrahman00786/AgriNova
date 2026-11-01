import {  useState } from "react"
import { toast } from "sonner";
import { FiUpload } from "react-icons/fi";

export default function ChangeProfilePicture(props) {

    const user = props.user;
    const setUser = props.setUser;
    const [imageFile, setImageFile] = useState(user.image);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);

    }

    const handleFileUpload = async () => {
        try {

            const data = new FormData();
            data.append("profilePic", imageFile);

            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/profile/updatepicture`,
                {
                    method: "PUT",
                    body: data,
                    credentials: 'include'
                }
            );
           

            if (Response.ok) {
                toast.success("Image uploaded");
                const resdata = await Response.json();
                setUser(resdata.data);


            } else {
                toast.error("Image Not Uploaded.");
            }

        } catch (error) {
            console.log("Error Message - ", error.message)
        }
    }

    return (

        <div className="w-full flex items-center justify-between rounded-md border border-richblack-100 bg-lightcream p-8 px-12 text-purple CardShadow">
            <div className="flex items-center gap-x-6">
                <img
                    src={user?.image}
                    alt={""}
                    className="aspect-square w-[75px] rounded-md object-contain"
                />
                <div className="space-y-2">
                    <p>Change Profile Picture</p>
                    <div className="flex flex-row gap-3">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="text-blue-400"
                            accept="image/png, image/gif, image/jpeg"
                        />

                        <button onClick={handleFileUpload} className=" flex gap-x-2 items-center m-2 p-2 px-4 font-bold text-richblack-5 
                                                 text-sm h-10 rounded-lg simplebutton grb1">
                                            <FiUpload></FiUpload>
                                            Upload</button>

                    </div>
                </div>
            </div>
        </div >

    )
}