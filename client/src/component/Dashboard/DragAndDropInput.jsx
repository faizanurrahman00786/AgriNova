import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';

function DragAndDropInput(props) {

    const setupload = props.setupload;
    const upload = props.upload;
    

    const onDrop = useCallback(acceptedFiles => {
        // Handle file upload
        setupload(acceptedFiles);
    }, [setupload]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className='border border-richblack-100 CardShadow rounded-md p-4 px-6 bg-richblack-5'>

            <div {...getRootProps()}  id='upload' className="flex flex-col w-full items-center py-6 border-dashed border border-richblack-100">
                <input {...getInputProps()} />


                <div className='w-full flex flex-col items-center justify-center'>
                    
                    <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-600">
                        <FiUploadCloud className="text-2xl text-caribbeangreen-300" />
                    </div>
                    <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-500">
                        Drag and drop or click here to{" "}
                        <span className="font-semibold text-caribbeangreen-400">Browse </span>
                        
                    </p>
                    <ul className="mt-2 flex list-disc justify-between space-x-12 text-center  text-xs text-pink-400">
                        <li>JPEG / JPG</li>
                        <li>Recommended size 5MB</li>
                    </ul>
                </div>
                < div
                    className='text-richblack-800 font-bold'>{upload.length > 0 && (upload[0].name)}
                </div>

            </div >
        </div>
    );
}

export default DragAndDropInput;