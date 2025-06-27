import {useRef} from "react";
import Image from "next/image";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay,Pagination,Navigation} from "swiper/modules"
// import "../public/css/support.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () =>{
    const swiperRef = useRef(null);
    const TestimonialData = [
        {
            id:1,
            img:"image1"
        },
        {
            id:2,
            img:"image2"
        },
        {
            id:3,
            img:"image3"
        },
        {
            id:4,
            img:"image4"
        },
    ]
    // useEffect(() => {
    //     // Preload each image
    //     TestimonialData.forEach((src) => {
    //       const link = document.createElement("link");
    //       link.rel = "preload";
    //       link.href = src;
    //       link.as = "image";
    //       document.head.appendChild(link);
    //     });
    
    //     // Cleanup function to remove preloads if component unmounts
    //     return () => {
    //       document.querySelectorAll("link[rel='preload'][as='image']").forEach((link) => link.remove());
    //     };
    // }, []);

    return(
    <section
      className="testmonial space-section"
    //   style={{ paddingBottom: "3.4rem", paddingTop: "3.4rem" }}
    >
   
      <div className="container mt-4 mb-0 text-center">
        <div className="hero-subheading">Testimoial</div>
        <h2 className="heading1 mb-2 text-center">
          Smiling Words from Satisfied Customers
        </h2>
        
        <Swiper 
        ref={swiperRef} 
        slidesPerView={1}
        spaceBetween={50} 
        centeredSlides={true}
        //   autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   }}
        loop={true}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            991: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1080: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
          }}
         className="mySwiper">
          
            {TestimonialData?.map((item,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div
                            className="col-9 col-md-12 col-lg-12  testimonial_card"
                            style={{ marginTop: "0px",marginBottom:'38px' }}
                        >
                        <Image
                            src="/images/quotegrey.svg"
                            alt="Example Image"
                            width={70}
                            height={70}
                            className="custom_quote"
                        />
                        <p className="testnomial_text">
                            “One of the best dental labs...!! The advanced lab provides
                            excellent aesthetic, well contoured, precise fitting for all work
                            whether its metal/pfm/all ceramic ya implant work!!“{" "}
                        </p>
                        <hr className="custom_hr" />
                        <p className="drname"> Dr. Hardik Prajapati</p>
                        <p className="star-rating">★ ★ ★ ★ ★</p>
                        </div>
                    </SwiperSlide>
                )
            })}
      </Swiper>
      
   
      </div>
    </section>
    )
}

export default Testimonial;


