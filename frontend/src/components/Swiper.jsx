import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Message from "./message";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import moment from "moment";
import {
  FaBox,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaStore,
  FaDollarSign
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return (
    <div className="w-full h-full mb-4">
  {isLoading ? null : error ? (
    <Message variant="danger">
      {error?.data?.message || error.error}
    </Message>
  ) : (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30} // Adjust space between slides
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full h-full"
    >
      {products.map(
        ({
          image,
          _id,
          name,
          price,
          description,
          brand,
          createdAt,
          numReviews,
          rating,
          quantity,
        }) => (
          <SwiperSlide
  key={_id}
  className="flex items-center justify-center h-[50vh] sm:h-[60vh] md:h-[70vh]"
>
<div
  className="relative w-full h-full flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-[rgba(225,_225,_225,_0.25)_0px_54px_55px,_rgba(225,_225,_225,_0.12)_0px_-12px_30px,_rgba(225,_225,_225,_0.12)_0px_4px_6px,_rgba(225,_225,_225,_0.17)_0px_12px_13px,_rgba(225,_225,_225,_0.09)_0px_-3px_5px]"
>
    {/* Image on the left */}
    <div className="w-full md:w-1/2 h-full flex justify-center items-center">
  <img
    src={image}
    alt={name}
    className="w-full h-full object-contain rounded-t-lg md:rounded-l-lg md:rounded-t-none"
  />
</div>

    {/* Product details on the right */}
    <div className="w-full md:w-1/2 flex flex-col justify-start p-4 md:p-8 text-center md:text-left">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-1 md:mb-4">
        {name}
      </h2>

      {/* Product description */}
      <div className="mt-1 md:mt-2">
        <p className="text-gray-800 text-sm sm:text-lg">
          {description}..
        </p>
      </div>

      {/* Text sections */}
      <div className="flex flex-col space-y-2 md:space-y-4 mt-4">
        <div className="flex items-center justify-center md:justify-start">
          <FaDollarSign className="mr-2 text-gray-800 text-sm sm:text-lg" />
          <span className="text-gray-800 font-medium text-sm sm:text-lg">
            Price: ₵ {price}
          </span>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <FaStore className="mr-2 text-gray-800 text-sm sm:text-lg" />
          <span className="text-gray-800 font-medium text-sm sm:text-lg">
            Brand: {brand}
          </span>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <FaClock className="mr-2 text-gray-800 text-sm sm:text-lg" />
          <span className="text-gray-800 font-medium text-sm sm:text-lg">
            Added: {moment(createdAt).fromNow()}
          </span>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <FaStar className="mr-2 text-gray-800 text-sm sm:text-lg" />
          <span className="text-gray-800 font-medium text-sm sm:text-lg">
            Reviews: {numReviews}
          </span>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <FaStar className="mr-2 text-gray-800 text-sm sm:text-lg" />
          <span className="text-gray-800 font-medium text-sm sm:text-lg">
            Ratings: {Math.round(rating)}
          </span>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <FaShoppingCart className="mr-2 text-gray-800 text-sm sm:text-lg" />
          <span className="text-gray-800 font-medium text-sm sm:text-lg">
            Quantity: {quantity}
          </span>
        </div>
      </div>
    </div>

    <div
      className="swiper-button-prev"
      style={{ left: "10px", color: "black" }}
    ></div>
    <div
      className="swiper-button-next"
      style={{ right: "10px", color: "black" }}
    ></div>
  </div>
</SwiperSlide>

        )
      )}
    </Swiper>
  )}
</div>

  );
};

export default ProductCarousel;

