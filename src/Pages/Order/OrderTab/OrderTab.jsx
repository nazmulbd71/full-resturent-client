import FoodCard from "../../../components/FoodCard/FoodCard";
import './OrderTab.css'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className} custom-bullet">${index + 1}</span>`;
        },
    };

    const itemsPerPage = 6;
    const totalSlides = Math.ceil(items.length / itemsPerPage);

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
                slidesPerView={1}
            >
                 {Array.from({ length: totalSlides }).map((_, index) => {
                    const start = index * itemsPerPage;
                    const end = start + itemsPerPage;
                    const itemsToShow = items.slice(start, end);

                    return (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-3 gap-10">
                                {itemsToShow.map((item) => (
                                    <FoodCard key={item._id} item={item} />
                                ))}
                            </div>
                        </SwiperSlide>
                    );
                })}

            </Swiper>
        </div>
    );
};

export default OrderTab;


