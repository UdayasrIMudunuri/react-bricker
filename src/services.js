function services() {
    return (
      <div>
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
          <nav className="s-12 grid background-none background-primary-hightlight">
            {/* logo */}
            <a href="index.html" className="m-12 l-3 padding-2x logo">
              <img src={require("./img/logo.svg")} />
            </a>
            <div className="top-nav s-12 l-9"> 
              <ul className="top-ul right chevron">
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
        {/* MAIN */}
        <main role="main">
          {/* TOP SECTION */}
          <header className="grid">
            <div className="s-12 padding-2x">
              <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">Our Services</h1>
              <p className="text-size-20 text-white text-center center text-uppercase">Con nonummy sem integer interdum volutpat dis eget eligendi aliquip dolorum magnam. Iriure duis autem vel<br /> eum dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div>
          </header>
          {/* SECTION 1 */}
          <section className="grid">
            <div className="m-12 l-6 padding-2x background-white">
              <p className="text-strong text-size-80 text-red">01</p>
              <h2 className="text-size-50 text-line-height-1 text-dark"><b>Nonummy nibh euismod tincidunt ut laoreet</b></h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
              <p>Libero malesuada varius leo mollis laoreet error occaecat unde nostra harum. A morbi hymenaeos rhoncus ridiculus temporibus consectetur ducimus exercitation. Integer arcu adipiscing augue iusto nam duis facilisi senectus iaculis proin repudiandae nemo cupidatat. Ipsum donec enim leo ultricies pulvinar aute semper dolores habitant impedit harum. </p>
            </div>
            {/* Image*/}
            <img className="m-12 l-6" src={require("./img/img-06.jpg")} />
          </section>
          {/* SECTION 2 */}
          <section className="grid">
            {/* Image*/}
            <img className="m-12 l-6" src={require("./img/img-01.jpg")} />
            <div className="m-12 l-6 padding-2x background-dark">
              <p className="text-strong text-size-80 text-red">02</p>
              <h2 className="text-size-50 text-line-height-1 margin-bottom-30 text-white"><b>Libero malesuada varius leo mollis tincidunt</b></h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
              <p>Libero malesuada varius leo mollis laoreet error occaecat unde nostra harum. A morbi hymenaeos rhoncus ridiculus temporibus consectetur ducimus exercitation. Integer arcu adipiscing augue iusto nam duis facilisi senectus iaculis proin repudiandae nemo cupidatat. Ipsum donec enim leo ultricies pulvinar aute semper dolores habitant impedit harum. </p>
            </div>
          </section> 
          {/* SECTION 3 */}
          <section className="grid">
            <div className="m-12 l-6 padding-2x background-aqua">
              <p className="text-strong text-size-80 text-white">03</p>
              <h2 className="text-size-50 text-line-height-1 text-white"><b>Morbi hymenaeos rhoncus ridiculus</b></h2>
              <h3>Nonummy nibh euismod tincidunt ut laoreet</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
              <p>Libero malesuada varius leo mollis laoreet error occaecat unde nostra harum. A morbi hymenaeos rhoncus ridiculus temporibus consectetur ducimus exercitation. Integer arcu adipiscing augue iusto nam duis facilisi senectus iaculis proin repudiandae nemo cupidatat. Ipsum donec enim leo ultricies pulvinar aute semper dolores habitant impedit harum. </p>
            </div>
            {/* Image*/}
            <img className="m-12 l-6" src={require("./img/img-05.jpg")} />
          </section> 
          {/* SECTION 6 */}
          <section className="grid margin-bottom">
            <div className="s-12 padding-2x background-dark">
              <a href="contact.html" className="s-12 m-9 l-3 center button text-size-20 text-white background-red">CONTACT US</a>
            </div>
          </section>      
        </main>
        {/* FOOTER */}
        <footer className="grid">
          {/* Footer - top */}
          {/* Image*/}
          <div className="s-12 l-3 m-row-3 margin-bottom background-image" style={{backgroundImage: 'url(img/img-04.jpg)'}} />
          <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
            <h2 className="text-strong text-uppercase">Who We Are?</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
          </div>
          <div className="s-12 m-9 l-3 padding-2x margin-bottom background-dark">
            <h2 className="text-strong text-uppercase">Where We Are?</h2>
            <img className="full-img" src={require("./img/map.svg")} alt="" />
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
      </div>
    );
  }