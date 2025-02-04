import React, { useEffect, useState } from 'react';
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ['Choose a genre', 'Business', 'Fiction', 'Horror', 'Adventure'];

const TopSell = () => {
  const [selectedCategory, setselectedCategory] = useState('choose a genre');
  const [swiperInstance, setSwiperInstance] = useState(null); // Pour accéder au contrôleur de Swiper
  const {data: books = []} = useFetchAllBooksQuery() ;
  console.log(books)
  

  const filterbooks =
    selectedCategory === 'choose a genre'
      ? books
      : books.filter((book) => book.category === selectedCategory.toLowerCase());

  const handleSlideChange = (swiper) => {
    // Si l'utilisateur est à la dernière diapositive
    if (swiper.isEnd) {
      setTimeout(() => {
        swiper.slideTo(0); // Retourner à la première diapositive
      }, 500); // Délai pour éviter un changement trop brusque
    }
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filtering */}
      <div className="mb-20 flex items-center">
        <select
          onChange={(e) => setselectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none cursor-pointer"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
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
        {filterbooks.length > 0 &&
          filterbooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSell;
