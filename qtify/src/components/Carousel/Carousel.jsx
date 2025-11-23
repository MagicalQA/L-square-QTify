import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import styles from "./Carousel.module.css";

function Carousel({ items, renderItem, prevId, nextId }) {
    return (
        <div className={styles.navWrapper}>
            <LeftNav id={prevId} />
            <RightNav id={nextId} />

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: `#${prevId}`,
                    nextEl: `#${nextId}`,
                }}
                spaceBetween={32}
                slidesPerView={6}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 6 },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={item.id || item.title || index}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Carousel;
