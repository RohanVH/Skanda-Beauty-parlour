import React from 'react';
import logo from './img/logo-gif.gif'

export default function Header() {
  return (
    <div>    
      <header class="s-header">
        <div class="row">
          <div class="header-logo">
            <a class="site-logo" href="index.html">
              <img src={logo} alt="SBP Logo" />
            </a>

          </div>

          <nav class="header-nav-wrap">
            <ul class="header-main-nav">
              <li class="current"><a class="smoothscroll" href="#home" title="Home">Home</a></li>
              <li><a class="smoothscroll" href="#about" title="about">About</a></li>
              <li><a class="smoothscroll" href="#Services" title="Services">Services</a></li>
              <li><a class="smoothscroll" href="#Gallery" title="Gallery">Gallery</a></li>
              <li><a class="smoothscroll" href="#download" title="download">Download</a></li>
            </ul>

            <div class="header-cta">
              <a href="#download" class="btn btn--primary header-cta__btn smoothscroll">Book Now</a>
            </div>
          </nav> {/* end header-nav-wrap */}

          <a class="header-menu-toggle" href="Menu.html"><span>Menu</span></a>
        </div>
      </header>
    </div>
  );
}
