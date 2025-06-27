import React,{ useRef,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { ScopedCssBaseline } from "@mui/material";

const AllProduct = () => {
  const swiperRef = useRef(null);
    
  useEffect(() => {
    const handleScroll = (e) => {
      if (!swiperRef.current) return;

      if (e.deltaY > 0) {
        // Scroll down -> next slide
        swiperRef.current.slideNext(3000);
      } else {
        // Scroll up -> prev slide
        swiperRef.current.slidePrev(3000);
      }
    };
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div  className="h-100 mt-5 pt-5">
      All Product
      <Swiper
        direction="vertical"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={30}
        slidesPerView={1}
        style={{height:'600px',marginTop:'100px'}}
      >
        <SwiperSlide style={{backgroundColor:"#000",color:"#fff"}}>
          <div className="bg-gray-200 flex items-center justify-center h-screen">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#fff",color:"#000"}}>
          <div className="bg-gray-300 flex items-center justify-center h-screen">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide style={{backgroundColor:"#000",color:"#fff"}}>
          <div className="bg-gray-400 flex items-center justify-center h-screen">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <section className="all-product-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>Digital prosthetic design</h2>
            </div>
            <div className="col-lg-6">
              <h3>Digital technology is at the heart of our manufacturing process. We use scanners and CAD/CAM software to design and manufacture dental prostheses with millimeter precision. design and manufacture</h3>
            </div>
          </div>
        </div>
      </section> */}
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="bg-gray-200 rounded p-8 text-center">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-300 rounded p-8 text-center">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-400 rounded p-8 text-center">Slide 3</div>
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default AllProduct;
