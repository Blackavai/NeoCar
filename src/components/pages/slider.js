import React from 'react';
import '../styles/slider.css';
// import $ from 'jquery';
// import Swiper from 'swiper';
// import { Link } from 'react-router-dom';

function Slider() {
//   useEffect(() => {
//     new Swiper('.content', {});
//   }, []);

  return (
        <div>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css" />
            </head>
            <div class="content_slider">

            <div class="product-img">

                <div class="product-img__item" id="img1">
                <img src="/assets/slide_crossover1.png" alt="star wars" class="product-img__img" />
                </div>

                <div class="product-img__item" id="img2">
                <img src="/assets/slide_suv.png" class="product-img__img" />
                </div>

                <div class="product-img__item" id="img4">
                <img src="/assets/slide_sedan.png"  class="product-img__img" />
                </div>

            </div>

            <div class="product-slider">
                <button class="prev ">
                <span class="icon">
                    <svg class="icon icon-arrow-right"><use href="#icon-arrow-left"></use></svg>
                </span>
                </button>
                <button class="next">
                <span class="icon">
                    <svg class="icon icon-arrow-right"><use href="#icon-arrow-right"></use></svg>
                </span>
                </button>

                <div class="product-slider__wrp swiper-wrapper">
                <div class="product-slider__item swiper-slide" data-target="img4">
                    <div class="product-slider__card">
                        <div class="sedan_slide product-slider__cover"></div>
                        <div class="product-slider__content">
                            <h1 class="product-slider__title slide_text_sedan">
                                <img src="/assets/slide_sedan_text.png" />
                            </h1>
                            
                            <span class="product-slider__price">
                                <img src="/assets/slide_sedan_2.png" />
                            </span>
                            <div class="product-ctr">
                                <img src="/assets/slide_sedan_11.png" />
                            </div>
                            

                            <div class="product-slider__bottom">
                            <button class="product-slider__cart">
                                Подробнее
                            </button>
                            
                        
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="product-slider__item swiper-slide" data-target="img1">
                    <div class="product-slider__card">
                    <div class="crossover_slide product-slider__cover"></div>
                    <div class="product-slider__content">
                        <h1 class="product-slider__title slide_text_sedan">
                            <img src="/assets/slide_crossover_text.png" />
                        </h1>
                        
                        
                        <span class="product-slider__price">
                            <img src="/assets/slide_crossover_2.png" />
                        </span>
                        <div class="product-ctr">
                            <img src="/assets/slide_crossover_1.png" />
                        </div>
                        

                        <div class="product-slider__bottom">
                        <button class="product-slider__cart">
                            Подробнее
                        </button>
                        
                    
                        </div>
                    </div>
                    </div>
                </div>

                <div class="product-slider__item swiper-slide" data-target="img2">
                    <div class="product-slider__card">
                    <div class="suv_slide product-slider__cover"></div>
                    <div class="product-slider__content">
                        <h1 class="product-slider__title slide_text_sedan">
                            <img src="/assets/slide_suv_text.png" />
                        </h1>
                        
                        
                        <span class="product-slider__price">
                            <img src="/assets/slide_suv_2.png" />
                        </span>
                        <div class="product-ctr">
                            <img src="/assets/slide_suv_1.png" />
                        </div>
                        

                        <div class="product-slider__bottom">
                        <button class="product-slider__cart">
                            Подробнее
                        </button>
                        
                    
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </div>


            <svg class="hidden btn" hidden>
            <symbol id="icon-arrow-left" viewBox="0 0 32 32">
                <path d="M0.704 17.696l9.856 9.856c0.896 0.896 2.432 0.896 3.328 0s0.896-2.432 0-3.328l-5.792-5.856h21.568c1.312 0 2.368-1.056 2.368-2.368s-1.056-2.368-2.368-2.368h-21.568l5.824-5.824c0.896-0.896 0.896-2.432 0-3.328-0.48-0.48-1.088-0.704-1.696-0.704s-1.216 0.224-1.696 0.704l-9.824 9.824c-0.448 0.448-0.704 1.056-0.704 1.696s0.224 1.248 0.704 1.696z"></path>
            </symbol>
            <symbol id="icon-arrow-right" viewBox="0 0 32 32">
                <path d="M31.296 14.336l-9.888-9.888c-0.896-0.896-2.432-0.896-3.328 0s-0.896 2.432 0 3.328l5.824 5.856h-21.536c-1.312 0-2.368 1.056-2.368 2.368s1.056 2.368 2.368 2.368h21.568l-5.856 5.824c-0.896 0.896-0.896 2.432 0 3.328 0.48 0.48 1.088 0.704 1.696 0.704s1.216-0.224 1.696-0.704l9.824-9.824c0.448-0.448 0.704-1.056 0.704-1.696s-0.224-1.248-0.704-1.664z"></path>
            </symbol>
            </svg> 
            {/* <script src='/node_modules/jquery.min.js'></script> */}
            {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js'></script> */}
            {/* <script  src="/assets/slider.js"></script> */}
        </div>
    );
}

export default Slider;