import React, { useRef, useState } from "react";

const Carousel = ({ isOpen, onClose, images }) => {
  if (!isOpen) return null;

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleMouseDown = (event) => {
    if (!carouselRef.current) return;
    carouselRef.current.isDown = true;
    carouselRef.current.startX = event.pageX || event.touches[0].pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!carouselRef.current) return;
    carouselRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    if (!carouselRef.current) return;
    carouselRef.current.isDown = false;
  };

  const handleMouseMove = (event) => {
    if (!carouselRef.current || !carouselRef.current.isDown) return;
    event.preventDefault();
    const x = event.pageX || event.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - carouselRef.current.startX) * 1; // ajuste a velocidade do arrasto conforme necessário
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - walk;
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={handleBackgroundClick}
    >
      <div
        className="relative w-3/4 overflow-hidden"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
      >
        <button
          className="absolute top-2 right-2 text-red-600"
          onClick={onClose}
        >
          X
        </button>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black bg-opacity-50"
          onClick={goToPrev}
        >
          ❮
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black bg-opacity-50"
          onClick={goToNext}
        >
          ❯
        </button>
        <div className="flex">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Preview ${index + 1}`}
              className={`max-w-full max-h-full flex-shrink-0 ${index === currentIndex ? "block" : "hidden"}`}
              style={{ width: "100%" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
