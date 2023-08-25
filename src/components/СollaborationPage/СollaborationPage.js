import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function СollaborationPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % 2);
        }, 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);

    const images = [
        "/collaboration_view/bottle_collaboration_1.png",
        "/collaboration_view/bottle_collaboration_2.png"
    ];

    return (
        <div className='collaborationPage'>
            <div className='collaborationPage_Cover'>
                <Image
                    className='collaborationPage_Cover_Image'
                    src="/collaboration_view/bottle_art.jpg"
                    width={1200}
                    height={1200}
                    alt="Bottle collaboration"
                />
            </div>
            <div className='collaborationPage_View'>
                <div className='collaborationPage_View_Image'>
                    <Image
                        className='collaborationPage_View_Image_1'
                        src={images[currentImageIndex]}
                        width={600}
                        height={600}
                        alt="Bottle collaboration"
                    />
                </div>
                <div className='collaborationPage_Info'>
                    <span className='collaborationPage_Info_Title'>Carne Bollente</span>
                    <span className='collaborationPage_Info_Description'>0.5 ML / 0.75 ML</span>
                </div>
            </div>
        </div>
    )
}

export default СollaborationPage;