import React from 'react';
import Map from './Map';
import { useRef } from 'react';

function Foreground() {
    const ref =useRef (null);
    const data = [
        {
            desc: "Doremon: nobitaaa kahan ho tum",
            filesize: ".9mb",
            close: true,
            tag: { IsOpen: true, tagTitle: "Download Now ", tagColour: "bg-black" },
        },
        // Add more objects as needed
        {
            desc: "Doremon :nobitaaa kahan ho tum",
            filesize: ".9mb",
            close: true,
            tag: { IsOpen: true, tagTitle: "Download Now ", tagColour: "bg-black" },
        },
        // A
        {
            desc: "Doremon :nobitaaa kahan ho tum",
            filesize: ".9mb",
            close: true,
            tag: { IsOpen: true, tagTitle: "Download Now ", tagColour: "bg-black" },
        },
        // A
        
    ];

    
    return (
        <>
            <div ref={ref} className='  w-full h-full bg-sky-800/30 flex gap-5 items-center justify-center '>


            {
                data.map((item, index) => 
                <Map data={item} reference={ref} />)
            }


            </div>
            
        </>
    );
}

export default Foreground;
