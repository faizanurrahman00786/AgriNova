
import { useState } from "react";
import { toast } from "sonner";


function AreaForm(props) {

    const { setcityModal, setcityName, cityName } = props;
    const cityData = ["Patna", "Banglore"];
    const [formData, setFormData] = useState({city:""})



    function onSubmit(e) {
        e.preventDefault();

        sessionStorage.setItem("city",formData.city);
        setcityName(formData.city);
        setcityModal(false);
  
    };

    function changeHandler(event) {
       
        setFormData({[event.target.name]: event.target.value});

    }



    return (
        <div className="w-full h-screen fixed modal z-10 flex justify-center items-start">
            <div className="w-[28%] rounded-lg mt-[10%] p-4 flex flex-col items-center justify-between form select-none">

                <div className="max-w-[500px] p-4 lg:p-8">
                    <h1 className="text-richblack-25 font-semibold text-[1.875rem] leading-[2.375rem]">
                        Select Your Area
                    </h1>
                    <p className="text-[1.125rem] leading-[1.625rem] my-4 text-purple font-serif">
                        Currently we are working on limited area. Please select from below:
                    </p>

                    <form onSubmit={onSubmit}>

                        <select
                            required
                            name="city"
                            onChange={changeHandler}
                            className="w-full bg-darkcream outline-none text-center rounded-lg p-[10px]
                       text-richblack-800 text-lg font-serif"
                        >
                            <option value={""} >Choose Your Location</option>
                            {cityData.map((city, index) => <option key={index} value={city}>{city}</option>)}
                        </select>

                        <div><button type="submit" className="h-10 rounded-lg px-4 mt-6 w-full
                     text-richblack-5 grb1 loginbutton">Submit</button></div>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default AreaForm;