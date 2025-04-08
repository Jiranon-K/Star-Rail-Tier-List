"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, UsersRound, ChevronLeft, ChevronRight, SquareUser } from "lucide-react";

const carouselData = [
  {
    id: 1,
    image: "/honkai-banner.png",
    title: "HONKAI STAR RAIL",
    description:
      "เดินทางผ่านจักรวาลอันไร้ขอบเขตค้นพบเรื่องราวและความลี้ลับที่รอคอยการค้นพบ",
  },
  {
    id: 2,
    image: "/honkai-banner2.jpg",
    title: "EXPLORE NEW WORLDS",
    description: "ร่วมผจญภัยกับตัวละครสุดพิเศษในดินแดนที่ไม่เคยมีใครไปถึง",
  },
  {
    id: 3,
    image: "/honkai-banner3.png",
    title: "MASTER THE ELEMENTS",
    description: "เรียนรู้พลังและทักษะใหม่เพื่อเอาชนะศัตรูที่ท้าทาย",
  },
];

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const totalSlides = carouselData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  useEffect(() => {
    if (isMounted) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isMounted]);

  
  if (!isMounted) {
    return (
      <div className="relative w-full h-[100vh] overflow-hidden bg-black">
      </div>
    );
  }

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Carousel slides */}
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover filter brightness-[0.5] blur-sm scale-105"
              priority={index === 0}
            />
          </div>
          <div className="absolute inset-0 bg-blue-900/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4 text-shadow-lg animate-fade-in">
              {slide.title}
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl mb-4 md:mb-6 text-shadow animate-fade-in-delay">
              {slide.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 animate-fade-in-delay2">
              <Link href="/tier-list" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-indigo-400/30">
                <User size={18} className="animate-pulse" /> Tier List
              </Link>
              <Link href="/characters" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-indigo-400/30">
                <UsersRound size={18} /> ตัวละคร
              </Link>
              <Link href="/light-cones" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-indigo-400/30">
                <SquareUser size={18} /> Light Cone
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <BannerCarousel />
    </div>
  );
};

export default Home;