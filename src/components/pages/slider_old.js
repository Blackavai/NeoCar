import React, { useState, useEffect, useRef } from 'react';
import '../styles/slider.css';
import Swiper from 'swiper';

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleSlideChange = () => {
      if (swiperRef.current) {
        setActiveSlide(swiperRef.current.activeIndex);
      }
    };

    const initSlider = () => {
      swiperRef.current = new Swiper('.product-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: false,
        navigation: {
          nextEl: '.next',
          prevEl: '.prev'
        },
        on: {
          init: handleSlideChange,
          slideChange: handleSlideChange
        }
      });
    };

    const destroySlider = () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };

    initSlider();

    return () => {
      destroySlider();
    };
  }, []);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="content">
      <div className="product-img">
        <ProductImageItem id="img1" src="/assets/slide_crossover1.png" isActive={activeSlide === 0} />
        <ProductImageItem id="img2" src="/assets/slide_suv.png" isActive={activeSlide === 1} />
        <ProductImageItem id="img4" src="/assets/slide_sedan.png" isActive={activeSlide === 2} />
      </div>

      <div className="product-slider">
        <button className="prev" onClick={handlePrevSlide}>
          <span className="icon">
            <svg className="icon icon-arrow-left">
              <use xlinkHref="#icon-arrow-left"></use>
            </svg>
          </span>
        </button>
        <button className="next" onClick={handleNextSlide}>
          <span className="icon">
            <svg className="icon icon-arrow-right">
              <use xlinkHref="#icon-arrow-right"></use>
            </svg>
          </span>
        </button>

        <div className="product-slider__wrp swiper-wrapper">
          <ProductSliderItem
            target="img4"
            isActive={activeSlide === 0}
            titleSrc="/assets/slide_sedan_text.png"
            priceSrc="/assets/slide_sedan_2.png"
            ctrSrc="/assets/slide_sedan_11.png"
          />

          <ProductSliderItem
            target="img1"
            isActive={activeSlide === 1}
            titleSrc="/assets/slide_crossover_text.png"
            priceSrc="/assets/slide_crossover_2.png"
            ctrSrc="/assets/slide_crossover_1.png"
          />

          <ProductSliderItem
            target="img2"
            isActive={activeSlide === 2}
            titleSrc="/assets/slide_suv_text.png"
            priceSrc="/assets/slide_suv_2.png"
            ctrSrc="/assets/slide_suv_1.png"
          />
        </div>
      </div>
    </div>
  );
}

function ProductImageItem({ id, src, isActive }) {
  return (
    <div className={`product-img__item ${isActive ? 'active' : ''}`} id={id}>
      <img src={src} alt="star wars" className="product-img__img" />
    </div>
  );
}

function ProductSliderItem({ target, isActive, titleSrc, priceSrc, ctrSrc }) {
  return (
    <div className={`product-slider__item swiper-slide ${isActive ? 'active' : ''}`} data-target={target}>
      <div className="product-slider__card">
        <div className={`product-slider__cover ${target}_slide`}></div>
        <div className="product-slider__content">
          <h1 className="product-slider__title slide_text_sedan">
            <img src={titleSrc} alt="" />
          </h1>
          <span className="product-slider__price">
            <img src={priceSrc} alt="" />
          </span>
          <div className="product-ctr">
            <img src={ctrSrc} alt="" />
          </div>
          <div className="product-slider__bottom">
            <button className="product-slider__cart">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
