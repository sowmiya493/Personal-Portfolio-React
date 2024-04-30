import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Hello, I'm Sowmiya. With a strong foundation in cloud technologies, I bring a blend of technical expertise and creative flair to the table. Proficient in Java and Python, I've also ventured into the realm of Japanese language, adding a cultural dimension to my skill set.",
    },
    {
      img: profilePic2,
      review:
        "My journey in the tech world has seen me dive deep into AWS, where I've undertaken various projects, exploring the vast possibilities of cloud-based solutions. Additionally, I've developed small web applications using React, demonstrating my commitment to hands-on learning and experimentation.",
    },
    {
      img: profilePic3,
      review:
        "I'm currently pursuing my education at Karpagam Institute of Technology, where I've maintained a commendable CGPA of 7.6 up to the fifth semester. Beyond academics, I've actively engaged in extracurricular activities, such as signing and dancing, to nurture a holistic growth mindset.",
    },
    {
      img: profilePic4,
      review:
        "Driven by a passion for design and a fascination with cloud-based technologies, I'm eager to continue exploring new horizons and pushing the boundaries of innovation. With a love for travel, I seek to imbibe diverse experiences that fuel my creativity and drive for excellence.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>About Me </span>
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
