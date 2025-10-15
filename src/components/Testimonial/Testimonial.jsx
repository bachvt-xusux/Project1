import React from 'react';
import Slider from 'react-slick';

const testimonialData = [
    {
        id: 1,
        name: 'abc',
        text: 'Chúng tôi mang đến đa dạng dịch vụ ẩm thực — từ món ăn truyền thống\n' +
            '  đến hiện đại, được chế biến từ nguyên liệu tươi ngon và phục vụ tận tâm.',
        img: 'https://picsum.photos/101/101'
    },
    {
        id: 2,
        name: 'abc',
        text: 'Chúng tôi mang đến đa dạng dịch vụ ẩm thực — từ món ăn truyền thống\n' +
            '  đến hiện đại, được chế biến từ nguyên liệu tươi ngon và phục vụ tận tâm.',
        img: 'https://picsum.photos/102/102'
    },
    {
        id: 3,
        name: 'abc',
        text: 'Thưởng thức hương vị tuyệt hảo của những món ăn đặc sắc,\n' +
            ' nơi ẩm thực truyền thống hòa quyện cùng phong cách hiện đại.\n' +
            ' Food 90 mang đến cho bạn trải nghiệm ẩm thực khó quên —\n' +
            ' đậm đà, tinh tế và đầy cảm xúc.',
        img: 'https://picsum.photos/103/103'
    }
];

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autopaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true
    };
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="300" className="py-10">
                <div className="container">
                    {/* Header section */}
                    <div className="text-center mb-20 max-w-[400] mx-auto">
                        <p className="text-sm bg-clip-text
                        text-transparent bg-gradient-to-r from-primary
                        to-secondary">Testimonial
                        </p>

                        <h1 className="text-3xl font-bold">Testimonial</h1>
                        <p className="text-xs text-gray-400">
                            {''}
                            Chúng tôi mang đến đa dạng dịch vụ ẩm thực — từ món ăn truyền thống
                            đến hiện đại, được chế biến từ nguyên liệu tươi ngon và phục vụ tận tâm.
                        </p>

                    </div>
                    {/* testimonial section */}
                </div>
                <div data-aos="zoom-in"
                     data-aos-duration="300"
                     className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
                    <Slider {...settings}>
                        {testimonialData.map(({ id, name, text, img }) => {
                            return (
                                <div key={id} className="my-6">
                                    <div
                                        className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4
                                                 drak:bg-gray-800 bg-primary/10 relative">
                                        <img src={img}
                                             alt=""
                                             className="rounded-full block mx-auto" />

                                        <p className="text-gray-500 text-sm">{text}</p>
                                        <h1 className="text-xl font-bold">{name}</h1>
                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                            ,,
                                        </p>

                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Testimonial;