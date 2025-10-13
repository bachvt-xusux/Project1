import React from 'react';
import bgImg from '../../assets/website/bgnew.png';
import Food11 from '../../assets/biryani/food1.png';
import Food22 from '../../assets/biryani/food2.png';
import Food33 from '../../assets/biryani/food3.png';

const ImageList = [
    {
        id: 1,
        img: Food11
    },
    {
        id: 2,
        img: Food22
    },
    {
        id: 3,
        img: Food33
    }
];

const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
const Hero = () => {
    const [imageId, setImageId] = React.useState(1);
    return (
        <>
            <div style={bgImage}
                 className="min-h-[100px] sm:min-h-[200px]
        duration-200 flex justify-center items-center"
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/*text content section */}
                        <div>
                        <h1>CHAO MUNG DEN FOOD 90</h1>
                        </div>
                        {/*Image section*/}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;