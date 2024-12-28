import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Slider() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };

  const handlePrev = () => {
    const scrollAmount = elementRef.current.clientWidth; // Scroll by one full image width
    elementRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const scrollAmount = elementRef.current.clientWidth; // Scroll by one full image width
    elementRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <HiChevronLeft
        onClick={handlePrev}
        className="text-white text-[30px] sm:text-[40px] absolute left-2 sm:left-4 top-[50%] transform -translate-y-1/2 cursor-pointer z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 ease-in-out"
      />

      {/* Slider */}
      <div
        className="flex overflow-x-scroll scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie, index) => (
          <img
            key={index}
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            alt={movie.title || "Movie Image"}
            className="min-w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover hover:border-white hover:border transition-all ease-in duration-100 rounded-lg "
          />
        ))}
      </div>

      {/* Right Arrow */}
      <HiChevronRight
        onClick={handleNext}
        className="text-white text-[30px] sm:text-[40px] absolute right-2 sm:right-4 top-[50%] transform -translate-y-1/2 cursor-pointer z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
      />
    </div>
  );
}

export default Slider;
