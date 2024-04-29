import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className="w-11/12 container mx-auto">
            <header className="bg-transparent">

                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to choose <br /> your <span className="text-sage-green-500 ">
                                    <Typewriter
                                        cursor
                                        cursorBlinking
                                        delaySpeed={1000}
                                        deleteSpeed={25}
                                        loop={0}
                                        typeSpeed={55}
                                        words={[
                                            'Pottery.',
                                            'Stoneware.',
                                            'Terra-Cotta Item.',
                                        ]}
                                    />
                                </span>
                                </h1>
                                <p className="mt-3 text-gray-600 dark:text-gray-400">Welcome to ClayNest Inc., your home for artisanal pottery and ceramics. Discover our range of traditional and contemporary designs, and explore the beauty of clay-made pottery, stoneware, porcelain, and terra cotta.</p>
                                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-sage-green-600 rounded-lg lg:w-auto hover:bg-sage-green-500 focus:outline-none focus:bg-sage-green-500">Explore</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img className="w-full h-full lg:max-w-xl" src="./banner-1.svg" alt="Catalogue-pana.svg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img className="w-full h-full lg:max-w-sm" src="./banner-0.svg" alt="Catalogue-pana.svg" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img className="w-full h-full lg:max-w-sm" src="./banner-2.svg" alt="Catalogue-pana.svg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Banner;