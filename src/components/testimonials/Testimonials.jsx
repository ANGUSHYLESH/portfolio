import React from "react";
import "./testimonials.css";
import Controlytics from "../../assets/controlytics.png";

import NetZeroThink from "../../assets/netzero.png"

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: Controlytics,

    name: 'Controlytics AI Private Limited',

    review: 'A Young Automation company in an aim to make Industrial Automation a Hobby. Where we take things based on quality and efficiency. Our end result  is to make the client feel they did the right thing by working with us and love to work again.',

    myContribution: 'Controlytics hired me as a software developer for three months, and I built a site to monitor and maintain the temperature, maintain vehicle entry and exit, and monitor the workers.'
  },


  {
    avatar: NetZeroThink,

    name: 'Net Zero Think Private Limited',

    review: ' We aim to decarbonize the ecosystem, help organisations identify the long-term risks, move towards achieving net-zero targets for a sustainable future, transform various industries, and help our clients and partners become net-zero and achieve long-term profitability in a climate-friendly manner.',

    myContribution: 'NetZeroThink hired me as a FullStack developer for three months, and I built a site to post and view the listings of a property and connect with buyers and sellers through the site for the subscribed users.'
  },
]


const Testimonials = () => {
  return <section id="testimonials">

    <h5>Professional</h5>
    <h2>Experience</h2>

    <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation ]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }}

    >
      {
        data.map(({ avatar, name, review, myContribution }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="controlytics" />
              </div>
              <h2 className="client__name"> {name}</h2>
              <small className="client__review">
                {myContribution}

              </small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  </section>;
};

export default Testimonials;
