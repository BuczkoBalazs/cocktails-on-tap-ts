import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import background from '../image/landing1.jpg'

export const Landing = () => {
    return (
    <Swiper
        speed={600}
        parallax={true}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
        >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage":
              `url(${background})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Welcome to Cocktails on Draft!</div>
            <div className="text" data-swiper-parallax="-200">
                <p>
                    Are you thirtsy? Have you tried already all pubs and winery nearby?
                    Then it's time to have some adventures with coctails.
                    We would like to help a bit for beginners why cocktails are so much fun.
                    Browse our page and found you recipes which are easy to do at home.
                    Let the adventure begin!
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Cocktail gallery</div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                    We have gathered some cocktails which is easy to create but hard to master.
                    Check out our collection and learn more.
                    Mark up your favourites and it will be save to your account.
                </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">Favourites section</div>
            <div className="text" data-swiper-parallax="-100">
                <p>
                    Have you checked our cocktails and found some interesting?
                    You can reach them here and save yourselves some time.
                    Life is too short to spend it on searching when you can make a cocktail instead.
                </p>
            </div>
        </SwiperSlide>
    </Swiper>
    )
}
