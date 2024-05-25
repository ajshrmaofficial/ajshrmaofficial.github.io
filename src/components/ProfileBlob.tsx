import { useState, useEffect } from 'react';
import '../styles/App.css'

function ProfileBlob() {
    const borderRadiusArr = ['30% 70% 29% 71% / 89% 61% 39% 11%', '30% 70% 67% 33% / 89% 61% 39% 11%', '30% 70% 67% 33% / 34% 61% 39% 66%', 
        '78% 22% 67% 33% / 34% 61% 39% 66%', '78% 22% 67% 33% / 34% 90% 10% 66%', '78% 22% 88% 12% / 34% 90% 10% 66%', '78% 22% 88% 12% / 34% 37% 63% 66%'
    ];
    const [currBorderRadius, setCurrBorderRadius] = useState(borderRadiusArr[0]);
    
    useEffect(()=>{
        const ChooseRandom = () => {
            let num = Math.floor(Math. random() * (6 - 0) + 0);
            while(currBorderRadius===borderRadiusArr[num]){
                num=Math.floor(Math. random() * (6 - 0) + 0);
            }
            setCurrBorderRadius(borderRadiusArr[num]);
        }
        setTimeout(()=>{
            ChooseRandom();
        }, 2000)
    }, [currBorderRadius])
    
    return(<>
        <div className='blob' style={{borderRadius: currBorderRadius}}/>
        </>
    )
}

export default ProfileBlob;

/* border-radius values for various blobs ->
30% 70% 29% 71% / 89% 61% 39% 11% 
30% 70% 67% 33% / 89% 61% 39% 11% 
30% 70% 67% 33% / 34% 61% 39% 66% 
78% 22% 67% 33% / 34% 61% 39% 66% 
78% 22% 67% 33% / 34% 90% 10% 66% 
78% 22% 88% 12% / 34% 90% 10% 66% 
78% 22% 88% 12% / 34% 37% 63% 66% 
*/