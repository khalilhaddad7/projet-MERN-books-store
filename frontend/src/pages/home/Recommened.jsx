import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/cart/booksApi';

const Recommened = () => {
     const [swiperInstance, setSwiperInstance] = useState(null); // Pour accéder au contrôleur de Swiper
     const { data } = useFetchAllBooksQuery();
     const books = data?.books || [];  // Récupérer uniquement le tableau des livres
     
   


    

    const handleSlideChange = (swiper) => {
      // Si l'utilisateur est à la dernière diapositive
      if (swiper.isEnd) {
        setTimeout(() => {
          swiper.slideTo(0); // Retourner à la première diapositive
        }, 500); // Délai pour éviter un changement trop brusque
      }
    };
  
  return (
    <div className=' py-20'>
      <h2 className="text-3xl font-semibold mb-6">Recomended for you</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        onSwiper={setSwiperInstance} // Enregistre l'instance Swiper
        onSlideChange={handleSlideChange} // Détecte les changements de diapositives
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(8,18).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default Recommened