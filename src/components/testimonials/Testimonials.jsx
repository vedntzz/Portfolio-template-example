import React from 'react'
import "./Testimonials.css"
import AVTR1 from'../../assets/avatar1.jpg'
import AVTR2 from'../../assets/avatar2.jpg'
import AVTR3 from'../../assets/avatar3.jpg'
import AVTR4 from'../../assets/avatar4.jpg'
import { Pagination, Ally } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import"swiper/css";

import 'swiper/css/pagination'


const data1 = [
  {
   avatar: AVTR1,
   name_1: 'Tina Snow',
   review:  "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit "
  },
  {
    avatar: AVTR2,
    name_1: 'Tina Snow',
    review:  "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit "
   },
   {
    avatar: AVTR3,
    name_1: 'Tina Snow',
    review:  "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit "
   },
   {
    avatar: AVTR4,
    name_1: 'Tina Snow',
    review:  "Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit "
   }
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className=" container testimonials__container"
      modules={[ Pagination]} spaceBetween={40} slidesPerView={1}
        pagination={{ clickable: true }}>
        {
      data1.map(({avatar, name_1, review}, index) => {
        return(
          <SwiperSlide key= {index}className="testimonial">
          <div className="client__avatar">
          <img src={avatar} alt= "Avatar__One" />
          </div>
          <h5 className='client__name'>{name_1}</h5>
          <small className='client__review'>
            {review}
          </small>
            </SwiperSlide>

        )
      })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
