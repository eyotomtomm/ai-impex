"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { brand, brands, values } from "@/lib/content";

export function Values() {
  return (
    <section className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Why</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  What <span className="fw-200">drives us.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <button type="button" className="swiper-button-prev" aria-label="Previous">
                  <span className="ti-arrow-left"></span>
                </button>
                <button type="button" className="swiper-button-next" aria-label="Next">
                  <span className="ti-arrow-right"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="testim-swiper3 out-right">
          <Swiper
            modules={[Navigation]}
            className="swiper-container"
            spaceBetween={30}
            loop
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: "auto" } }}
            navigation={{ nextEl: ".testim-modern .swiper-button-next", prevEl: ".testim-modern .swiper-button-prev" }}
          >
            {[...values, ...values].map((v, i) => (
              <SwiperSlide key={i}>
                <div className="item">
                  <div className="cont">
                    <h6 className="sub-title mb-15">{v.title}</h6>
                    <div className="text">
                      <p>“ {v.body} ”</p>
                    </div>
                  </div>
                  <div className="info">
                    <div className="d-flex align-items-center">
                      <div className="img">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/leaf.png" alt="" />
                      </div>
                      <div className="ml-20">
                        <h6 className="fz-18">{brand.full}</h6>
                        <span className="p-color opacity-8 fz-15 mt-5">26 years young</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  return (
    <section className="clients-carso in-circle section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                One group, <br /> a <span className="opacity-7">family of trusted brands.</span>
              </h3>
            </div>
          </div>
        </div>
        <Swiper
          className="swiper-container"
          speed={600}
          loop
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{ 600: { slidesPerView: 3, spaceBetween: 30 }, 1000: { slidesPerView: 5, spaceBetween: 40, centeredSlides: true } }}
        >
          {[...brands, ...brands].map((b, i) => (
            <SwiperSlide key={i}>
              <div className="item">{b}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              Reaching <span className="fw-600">22,000+ outlets</span> across Ethiopia
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
