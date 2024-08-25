import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ImageSlider.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const ImageSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 30000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://img.freepik.com/free-photo/close-up-view-beautiful-dog-with-bow-tie_23-2148786567.jpg?w=826&t=st=1717933874~exp=1717934474~hmac=4606b2fb8f8a28ef4211675d1c6bdb116a020b7293a527926e54ccf2bbf389d7"
          alt="First slide"
          style={{ width: '100%', height: '450px', objectFit: 'cover' }}
        />
        <div className="swiper-caption">
          <h2>Welcome to Pet Shop</h2>
          <p>Discover the best products for your beloved pets.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/free-photo/front-view-beautiful-dog-with-copy-space_23-2148786498.jpg?w=826&t=st=1717933544~exp=1717934144~hmac=44edabaff58cfa18f5a1ef66bf6678d81d493a6358d7956a00f7188a7825156e"
          alt="Second slide"
          style={{ width: '100%', height: '450px', objectFit: 'cover' }}
        />
        <div className="swiper-caption2">
          <h2>Quality Products</h2>
          <p>We offer a wide range of products for all pets.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://img.freepik.com/free-photo/front-view-beautiful-dog-with-copy-space_23-2148786560.jpg?w=826&t=st=1717933427~exp=1717934027~hmac=f808316766fc06bb59619ac9681e2e0b19d736d546c44b3346135b1f98ac5d36"
          alt="Third slide"
          style={{ width: '100%', height: '450px', objectFit: 'cover' }}
        />
        <div className="swiper-caption3">
          <h2>Best Care</h2>
          <p>Ensure your pets receive the best care with our products.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
