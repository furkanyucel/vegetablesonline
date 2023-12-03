import "./Testimonial.css"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            // initialSlide: 2
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <section className="testimonial">
          <article>
          <img src="/images/img-2.png" alt="Parrot Icon" />
          <h2>Testimonial</h2>
          </article>
          <article>
            <div className="profile">
              <img src="/images/client-img.png" alt="" />
              <div className="info">
                <h4 className="name">Magna</h4>
                <p className="title">Consectetur adipiscing</p>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum</p>
          </article>
            </section>
          </div>
          <div>
            <section className="testimonial">
          <article>
          <img src="/images/img-2.png" alt="Parrot Icon" />
          <h2>Testimonial</h2>
          </article>
          <article>
            <div className="profile">
              <img src="/images/client-img.png" alt="" />
              <div className="info">
                <h4 className="name">Adam</h4>
                <p className="title">Consectetur adipisc</p>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </article>
            </section>
          </div>
          <div>
            <section className="testimonial">
          <article>
          <img src="/images/img-2.png" alt="Parrot Icon" />
          <h2>Testimonial</h2>
          </article>
          <article>
            <div className="profile">
              <img src="/images/client-img.png" alt="" />
              <div className="info">
                <h4 className="name">Philip</h4>
                <p className="title">Consectetur</p>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          </article>
            </section>
          </div>
        </Slider>
      </div>
    );
  }
}
