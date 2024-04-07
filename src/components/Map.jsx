import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { motion, MotionConfig } from "framer-motion"

function Map({ data , reference }) { // Destructure `data` from props
    return (
        <motion.div  drag dragConstraints={reference} whileDrag={{scale:1.2}} className=' mb-80  flex-shrink-0 w-48 h-48 rounded-[30px] bg-blend-soft-light bg-cyan-800 text-white p-5 overflow-hidden relative  items-center'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 bg-black w-full h-10 left-0 flex items-center justify-between px-8'>
            <div className='flex-grow flex items-center justify-center'>Download Now</div>
            <IoMdDownload />
        </div>
    </motion.div>
    );
}

export default Map;
