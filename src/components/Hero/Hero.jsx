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
    backgroundRepeat: 'no-repeat'
};
const Hero = () => {
    const [imageId, setImageId] = React.useState(Food11);
    return (
        <>
            <div style={bgImage}
                 className="min-h-[500px] sm:min-h-[600px]
                 bg-gray-100 dark:bg-gray-950
        duration-200 flex justify-center items-center"
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/*text content section */}
                        <div data-aos="zoom-out"
                             data-aos-duration="400"
                             data-aos-once="true"
                             className="flex flex-col justify-center gap-4 pt-12 sm:pt-0
                        text-center sm:text-left order-2 sm:order-1">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                CHAO MUNG DEN FOOD 90
                            </h1>

                            <p className="text-sm">
                                Thưởng thức hương vị tuyệt hảo của những món ăn đặc sắc,
                                nơi ẩm thực truyền thống hòa quyện cùng phong cách hiện đại.
                                Food 90 mang đến cho bạn trải nghiệm ẩm thực khó quên —
                                đậm đà, tinh tế và đầy cảm xúc.
                            </p>
                            <div>
                                <button className="bg-gradient-to-r from-primary to-secondary
                              text-white px-4 py-2 rounded-full hover:scale-105 duration-200 mx-0 sm:mx-0"> Order Now
                                </button>
                            </div>
                        </div>
                        {/*Image section*/}
                        <div>
                            <div className="order-1 sm:order-2 min-h-[450px] flex
                            justify-center items-center relative">
                                <div>
                                    {/* main image section */}
                                    <div
                                        className="flex justify-center items-center h-[200px] sm:h-[350px] overflow-hidden">
                                        <img
                                            data-aos="zoom-in"
                                            data-aos-duration="300"
                                            data-aos-once="true"
                                            src={imageId}
                                            alt=""
                                            className="w-[300px] sm:w-[450px] mx-auto spin" />
                                    </div>
                                    {/* mian list section */}
                                    <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2
                                    lg:py-2 justify-center gap-4 absolute bottom-0 lg:-right bg-white/30 rounded-full">
                                        {
                                            ImageList.map((item) => (
                                                <img
                                                    data-aos="zoom-in"
                                                    data-aos-duration="400"
                                                    data-aos-once="true"
                                                    key={item.id}
                                                    src={item.img}
                                                    className="max-w-[100px] h-[100px] object-contain i
                                                    nline-block hover:scale-105 duration-200"
                                                    onClick={
                                                        () => {
                                                            setImageId(
                                                                item.id === 1 ?
                                                                    Food11 : item.id === 2 ? Food22 : Food33
                                                            );
                                                        }} />
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Hero;