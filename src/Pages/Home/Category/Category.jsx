import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
    
    return (
        <section>
            <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-center text-4xl uppercase text-white -mt-16">Grill Stick</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-center text-4xl uppercase text-white -mt-16">Hot Dogs</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-center text-4xl uppercase text-white -mt-16">Grill Veg</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-center text-4xl uppercase text-white -mt-16">Wings</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-center text-4xl uppercase text-white -mt-16">Steaks</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;