import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {
    const [image,setImage] = useState(false);
    const [color,setColor] = useState("#ffffff");
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [loading,setLoading] = useState(false);
    const onSubmitHandler = async (e) =>{
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('name',name);
            formData.append('desc',desc);
            formData.append('image',image);
            formData.append('bgColor',color);
            const response = await axios.post(`${url}/api/album/add`,formData);

            if(response.data.success){
                toast.success('album added');
                setDesc("");
                setImage(false);
                setName("");
            }
            else{
                toast.error('something went wrong');
            }

        } catch (error) {
            toast.error('error occurred');
        }
        setLoading(false);
        const response = await axios.post(`$`)
    }

    return loading ? (
        <div className='grid place-items-center min-h-[80vh]'>
            <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'></div>
        </div>
    )
    :(
        <div>
            <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
                <div className='flex flex-col gap-4'>
                    <p>Upload Image</p>
                    <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' accept='image/*' hidden/>
                    <label htmlFor="image">
                        <img className='w-24 cursor-pointer' src={image ?  URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <p>Album Name</p>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder='type here' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' />
                </div>

                <div className='flex flex-col gap-2.5'>
                    <p>Album Description</p>
                    <input type="text" onChange={(e)=>setDesc(e.target.value)} value={desc} placeholder='type here' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' />
                </div>

                <div className='flex flex-col gap-3'>
                    <p>Background colour</p>
                    <input type="color" onChange={(e)=>setColor(e.target.value)} value={color} />
                </div>

                <button className='text-base bg-black text-white py-2.5 px-14 px-14 cursor-pointer' type='submit' >ADD</button>
            </form>
        </div>
    )
}

export default AddAlbum