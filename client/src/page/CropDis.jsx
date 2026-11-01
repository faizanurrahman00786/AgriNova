import DragAndDropInput from "../component/Dashboard/DragAndDropInput";
import Button2 from "../component/Homepage/Button2";
import { useState, useEffect } from "react";
import { toast } from "sonner";

function CropDis(props) {

    const { login, setModal } = props;

    if (login)
        setModal(false);
    else
        setModal(true);

    const [history, setHistory] = useState([]);
    const [report, setReport] = useState({});
    const [thumbnail, setThumbnail] = useState(null);
    const [upload, setupload] = useState([]);

    const formData = new FormData;
    formData.append("cropImage", upload[0]);



    async function checkHistory() {

        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/cropds/getallds`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                }
            );

            if (Response.ok) {
                const data = await Response.json();
                setHistory(data.data);

            } else {
                toast.error("Error in fetch records");
            }
        }
        catch (error) {
            toast.error("Failed to fetch records.");
            console.error("Failed to fetch records", error);
        }

    }


    async function submitHandler() {

        try {
            const Response = await fetch(
                `${process.env.REACT_APP_BASE_URL}/cropds/cropdscheck`,
                {
                    method: "POST",
                    body: formData,
                    credentials: "include"
                }
            );

            if (Response.ok) {
                const data = await Response.json();
                setReport(data.data);
                toast.success("Successfully analysis done");

            } else {
                toast.error("Failed to analysis");
            }
        }
        catch (error) {
            toast.error("Failed to analysis.");
            console.error("Failed to analysis", error);
        }

    }

    useEffect(() => {
        if (upload.length > 0) {
            const objectUrl = URL.createObjectURL(upload[0]);
            setThumbnail(objectUrl);

            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [upload]);


    useEffect(function () {
        checkHistory()
    }, [report]);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="aiImage w-full mt-16" />
            <div className="w-9/12 flex flex-col items-center justify-center -mt-28">
                <div className="w-9/12"><DragAndDropInput setupload={setupload} upload={upload}></DragAndDropInput></div>
                <button onClick={submitHandler} className="w-1/5 flex justify-center items-center mt-4"><Button2 name={"Analyze Your Crops"} clsName={"grb1"}></Button2></button>

                <div className="w-full flex items-center justify-between mt-10">
                    <hr className="w-1/3 text-richblack-200"></hr>
                    <p className="font-serif text-caribbeangreen-700 font-semibold text-2xl">Disease Analysis Report</p>
                    <hr className="w-1/3 text-richblack-200"></hr>
                </div>

                <div className="w-full h-64 flex justify-center items-center my-6 p-4 border border-richblack-100 rounded-md gap-x-2 shadow-lg bg-richblack-5">
                    <img src={thumbnail} className="w-1/4 h-full rounded-md"></img>

                    <div className="w-3/4 h-full flex flex-col border border-richblack-100 rounded-lg px-2">
                        <div className="w-full flex justify-between items-center gap-x-2 py-1">
                            <div className="w-1/5 p-2 px-10 bg-caribbeangreen-500 text-richblack-5 rounded-lg">
                                <p className="text-sm">Crop Name:</p>
                                <p className="text-xl font-serif font-semibold">{report?.cropName}</p>
                            </div>
                            <div className="w-1/5 p-2 px-10 bg-purple text-richblack-5 rounded-lg">
                                <p className="text-sm">Healthy:</p>
                                <p className="text-xl font-serif font-semibold">{report?.healthy?.toString()}</p>
                            </div>
                            <div className="w-2/5 p-2 px-8 bg-purple text-richblack-5 rounded-lg">
                                <p className="text-sm">Disease Name:</p>
                                <p className="text-xl font-serif font-semibold">{report?.diseaseName}</p>
                            </div>
                            <div className="w-1/5 p-2 px-10 bg-caribbeangreen-500 text-richblack-5 rounded-lg">
                                <p className="text-sm">Confidence:</p>
                                <p className="text-xl font-serif font-semibold">{report?.confidence}</p>
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <p className="text-lg text-richblack-600">Reconmmended Treatment:</p>
                            <p className="font-mono mt-1">{report?.treatment}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between mt-10">
                    <hr className="w-2/5 text-richblack-200"></hr>
                    <p className="font-serif text-caribbeangreen-700 font-semibold text-2xl">Recent Reports</p>
                    <hr className="w-2/5 text-richblack-200"></hr>
                </div>

                <div className="w-full flex flex-col items-center justify-center bg-darkcream    mt-4 mb-10 shadow-lg">
                    <div className="w-full flex justify-evenly items-center border rounded-t-md border-richblack-100 font-bold text-blue-400">
                        <p className="p-2 px-8 w-[24%]">Date</p>
                        <div className="border border-richblack-25 h-10"></div>
                        <p className="p-2 px-8 w-[24%]">Crop Name</p>
                        <div className="border border-richblack-25 h-10"></div>
                        <p className="p-2 px-8 w-[24%]">Disease Name</p>
                        <div className="border border-richblack-25 h-10"></div>
                        <p className="p-2 px-8 w-[24%]">Healthy</p>
                    </div>

                    {history?.map((record) => (
                        <div key={record._id} className="w-full flex justify-evenly items-center border border-t-0 border-richblack-100 font-mono">
                            <p className="p-2 px-8 w-[24%]">{record.date.slice(0, 10)}</p>
                            <div className="border border-richblack-25 h-10"></div>
                            <p className="p-2 px-8 w-[24%]">{record.cropName}</p>
                            <div className="border border-richblack-25 h-10"></div>
                            <p className="p-2 px-8 w-[24%]">{record.cropDis}</p>
                            <div className="border border-richblack-25 h-10"></div>
                            <p className="p-2 px-8 w-[24%]">{record.healthy}</p>
                        </div>)
                    )}

                </div>

            </div>
        </div>
    )
}

export default CropDis;