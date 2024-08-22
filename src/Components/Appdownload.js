import React from 'react';
import lady from './img/logo-gif.gif'; // Remove the curly braces


export default function Appdownload() {
  return (
    <section
      id="home"
      className="s-home target-section"
      data-parallax="scroll"
      data-image-src={lady}
      data-natural-width={3000}
      data-natural-height={2000}
      data-position-y="center"
    >
      <div className="shadow-overlay"></div>

      <div className="home-content">
        <div className="row home-content__main">
          <div className="home-content__left">
            <h1>
            Your Beauty, <br />
            Our Passion
            </h1>

            <h3>
            Effortlessly book your beauty services online. Skanda Beauty Parlour brings expert care and personalized treatments right to your fingertips. Get pampered and shine like never before!
            </h3>

            <div className="home-content__btn-wrap">
              <a href="#download" className="btn btn--primary home-content__btn smoothscroll">
                Get The App
              </a>
            </div>
          </div> {/* end home-content__left */}
          
          <div className="home-content__right" >
            <img src={lady} alt="" style={{backgroundImage: `url(${lady})`, backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}
            />
            
          </div> {/* end home-content__right */}
        </div> {/* end row home-content__main */}
        <ul class="home-content__social">
            <li><a href="#0">Facebook</a></li>
            <li><a href="#0">twitter</a></li>
            <li><a href="#0">Instagram</a></li>
            <li><a href="#0">Youtube</a></li>
        </ul>
      </div> {/* end home-content */}
        <a href="#about" class="home-scroll smoothscroll">
            <span class="home-scroll__text">Scroll</span>
            <span class="home-scroll__icon"></span>
        </a> 
    </section>
  );
}
