import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imag from '../assets/imag.png'

const Brands = () => {
  return (
    <div>
        <div className='px-30 text-2xl py-20'>Представленные бренды</div>
        <div className="w-full max-w-3xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='pl-86 pb-10'>
          <img
            src={imag}
            alt="Slide 1"
            className="w-40 h-auto object-cover rounded-full  "
          />
          
          
        </SwiperSlide>
        <SwiperSlide className='pl-86 pb-10'>
          <img
            src={imag}
            alt="Slide 2"
            className="w-20 h-auto object-cover rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide className='pl-86 pb-10'>
          <img
            src={imag}
            alt="Slide 3"
            className="w-20 h-auto object-cover rounded-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Brands