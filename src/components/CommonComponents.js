// CommonComponents.js

import React from 'react';

function Header() {
  return (
           <div> 
            {/*
        You can change the color scheme of the page. Just change the class of the <body> tag. 
        You can use this class: "primary-color-white", "primary-color-red", "primary-color-orange", "primary-color-blue", "primary-color-aqua", "primary-color-dark" 
        */}
            {/*
        Each element is able to have its own background or text color. Just change the class of the element.  
        You can use this class: 
        "background-white", "background-red", "background-orange", "background-blue", "background-aqua", "background-primary" 
        "text-white", "text-red", "text-orange", "text-blue", "text-aqua", "text-primary"
        */}
            {/* HEADER */}
            <header className="grid">
              {/* Top Navigation */}
              <nav className="s-12 grid" style={{ backgroundColor: '#002633 ' }}>
  {/* Content of the navigation bar */}

                {/* logo */}
                <a href="home.js" className="m-12 l-3 padding-2x logo">
                  <img src={require("/workspace/react-bricker/src/img/logo.png")} />
                </a>
                <div className="top-nav s-12 l-9"> 
                  <ul className="top-ul right chevron">
                    <li><a href="/home">Home</a></li>
                    <li><a href="./aboutUs">About Us</a></li>
                    <li><a href="./services">Services</a></li>
                    <li><a href="./gallery">Gallery</a></li>
                    <li><a href="./contact">Contact</a></li>
                  </ul>
                </div>
              </nav>
            </header></div>
  );}

function Footer() {
  return (
    <footer className="grid">
    {/* Footer - top */}
    {/* Image*/}
    <div className="s-12 l-3 m-row-3 margin-bottom background-image" style={{backgroundImage: 'url(/workspace/react-bricker/src/img/img-04.jpg)'}} />
    <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
      <h2 className="text-strong text-uppercase">Who We Are?</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
    </div>
    <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
      <h2 className="text-strong text-uppercase">Where We Are?</h2>
      <img className="full-img" src={require("/workspace/react-bricker/src/img/map.png")} alt="" />
    </div>
    <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
      <h2 className="text-strong text-uppercase">Contact Us</h2>
      <p><b className="text-primary margin-right-10">P</b> 0800 4521 800 50</p>
      <p><b className="text-primary margin-right-10">M</b> <a className="text-primary-hover" href="mailto:contact@sampledomain.com">contact@sampledomain.com</a></p>
      <p><b className="text-primary margin-right-10">M</b> <a className="text-primary-hover" href="mailto:office@sampledomain.com">office@sampledomain.com</a></p>
    </div>
    {/* Footer - bottom */}
    <div className="s-12 text-center margin-bottom">
      <p className="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
      <p className="text-size-12">All images have been purchased from Bigstock. Do not use the images in your website.</p>
      <p><a className="text-size-12 text-primary-hover" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">Design and coding by Responsee Team</a></p>
    </div>
  </footer> 
  );
}

function MetaTags() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Free responsive business website template</title>
      <link rel="stylesheet" href="css/components.css" />
      <link rel="stylesheet" href="css/icons.css" />
      <link rel="stylesheet" href="css/responsee.css" />
      <link rel="stylesheet" href="owl-carousel/owl.carousel.css" />
      <link rel="stylesheet" href="owl-carousel/owl.theme.css" />
      {/* CUSTOM STYLE */}      
      <link rel="stylesheet" href="css/template-style.css" />
      <link href="https://fonts.googleapis.com/css?family=Barlow:100,300,400,700,800&subset=latin-ext" rel="stylesheet" />
    </>
  );
}

export { Header, Footer, MetaTags };
