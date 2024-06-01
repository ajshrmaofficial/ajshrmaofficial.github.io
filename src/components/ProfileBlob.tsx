import { useState, useEffect } from 'react';
import ProfileImage from '../assets/profile.jpg'

function ProfileBlob() {
    const borderRadiusArr = ['28% 72% 74% 26% / 7% 35% 65% 93%', '86% 14% 28% 72% / 66% 12% 88% 34%', '78% 22% 46% 54% / 90% 78% 22% 10%', '37% 63% 51% 49% / 11% 26% 74% 89%'
    ];
    const [currBorderRadius, setCurrBorderRadius] = useState(borderRadiusArr[0]);
    
    useEffect(()=>{
        const ChooseRandom = () => {
            let num = Math.floor(Math. random() * (3 - 0) + 0);
            while(currBorderRadius===borderRadiusArr[num]){
                num=Math.floor(Math. random() * (3 - 0) + 0);
            }
            setCurrBorderRadius(borderRadiusArr[num]);
        }
        setTimeout(()=>{
            ChooseRandom();
        }, 8000) 
    }, [currBorderRadius])
    
    return(
        <div className='lg:size-9/12 overflow-hidden transition-[border-radius] ease-in-out duration-[8000ms]' style={{borderRadius: currBorderRadius}}>
            <img className='w-full h-full' src={ProfileImage} alt="Profile Image" />
        </div>
    )
}

export default ProfileBlob;

/* border-radius values for various blobs ->
28% 72% 74% 26% / 7% 35% 65% 93%
86% 14% 28% 72% / 66% 12% 88% 34%
78% 22% 46% 54% / 90% 78% 22% 10%
37% 63% 51% 49% / 11% 26% 74% 89% 
*/