function About_us() {
    return  (
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
                <li><a href="home.js">Home</a></li>
                <li><a href="about-us.js">About Us</a></li>
                <li><a href="services.js">Services</a></li>
                <li><a href="gallery.js">Gallery</a></li>
                <li><a href="contact.js">Contact</a></li>
              </ul>
            </div>
          </nav>
        </header>
        {/* MAIN */}
        <main role="main">
          {/* TOP SECTION */}
          <header className="grid">
            <div className="s-12 padding-2x">
              <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">About Us</h1>
              <p className="text-size-20 text-white text-center center text-uppercase">Con nonummy sem integer interdum volutpat dis eget eligendi aliquip dolorum magnam. Iriure duis autem vel<br /> eum dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div>
          </header>
          {/* SECTION 1 */}
          <section className="grid">        
            <div className="m-12 l-6 padding-2x background-white">
              <h2 className="text-dark">Nonummy nibh euismod tincidunt ut laoreet</h2>
              <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br /><br /></p>
              <h2 className="text-dark">Wisi malesuada scelerisque praesent mi accumsan</h2>
              <p>Tortor massa nec orci accusamus auctor aute euismod lacus ipsam culpa earum beatae fugiat. Wisi malesuada scelerisque praesent mi accumsan euismod ea penatibus felis lacinia maiores dolorum optio officia. Nonummy libero adipiscing vel nulla dis tristique torquent sollicitudin felis inceptos eligendi molestiae omnis aspernatur.</p><p>
              </p></div>
            {/* Image*/}
            <img className="l-6 hide-s hide-m" src={require("./img/img-01.jpg")} />
          </section>
          {/* SECTION 2 */}
          <section className="grid margin margin-bottom padding-2x background-primary">
            <div className="s-12 m-6 l-3">
              <span className="timer text-size-50 text-white text-strong">1500</span>
              <h3 className="text-uppercase text-strong">Ultricies eros sociis</h3>
              <p className="text-size-16 margin-m-bottom-20">Eodem modo typi nonummy maecenas ultricies eros sociis hendrerit dictum.</p> 
            </div>
            <div className="s-12 m-6 l-3">
              <span className="timer text-size-50 text-white text-strong">95</span> <span className="text-size-50 text-white text-strong">%</span>
              <h3 className="text-uppercase text-strong">Magna condimentum suspendisse</h3>
              <p className="text-size-16 margin-m-bottom-20">Duis autem libero ullam magna condimentum suspendisse pellentesque.</p> 
            </div>
            <div className="s-12 m-6 l-3">
              <span className="timer text-size-50 text-white text-strong">287</span>
              <h3 className="text-uppercase text-strong">Consequat phasellus orci</h3>
              <p className="text-size-16 margin-m-bottom-20">Mirum est notare dolor consequat phasellus orci pellentesque hendrerit.</p> 
            </div>
            <div className="s-12 m-6 l-3">
              <span className="timer text-size-50 text-white text-strong">7</span> <span className="text-size-50 text-white text-strong">milion</span>
              <h3 className="text-uppercase text-strong">Augue et venenatis</h3>
              <p className="text-size-16 margin-m-bottom-20">Nam liber tempor erat augue et venenatis lorem ipsum dolor si amet.</p> 
            </div>
          </section>
          {/* SECTION 3 */}
          <section className="grid margin">
            <h2 className="s-12 text-white text-thin text-size-30 text-white text-uppercase margin-top-bottom-20 center text-center">Our <b>Dream Team</b></h2> 
            <div className="s-12 m-6 l-2 margin-bottom">
              <img src={require("./img/team-01.jpg")} />
              <h4 className="background-primary padding text-strong">Frank Star</h4>
              <p className="margin-bottom-10 text-primary text-uppercase">Boss</p>                                                                                                                                          
            </div>
            <div className="s-12 m-6 l-2 margin-bottom">
              <img src={require("./img/team-02.jpg")} />
              <h4 className="background-primary padding text-strong">Jane Naismith</h4>
              <p className="margin-bottom-10 text-primary text-uppercase">Graphic Designer</p>                                                                                                                                          
            </div>
            <div className="s-12 m-6 l-2 margin-bottom"> 
              <img src={require("./img/team-03.jpg")} />
              <h4 className="background-primary padding text-strong">Mark Stoner</h4>
              <p className="margin-bottom-10 text-primary text-uppercase">Web Designer</p>                                                                                                                                          
            </div>
            <div className="s-12 m-6 l-2 margin-bottom"> 
              <img src={require("./img/team-04.jpg")} />
              <h4 className="background-primary padding text-strong">Steve Carpenter</h4>
              <p className="margin-bottom-10 text-primary text-uppercase">Web Developer</p>                                                                                                                                          
            </div>
            <div className="s-12 m-6 l-2 margin-bottom"> 
              <img src={require("./img/team-05.jpg")} />
              <h4 className="background-primary padding text-strong">Steff Kingston</h4>
              <p className="margin-bottom-10 text-primary text-uppercase">Account Manager</p>                                                                                                                                          
            </div>
            <div className="s-12 m-6 l-2 margin-bottom"> 
              <img src={require("./img/team-06.jpg")} />
              <h4 className="background-primary padding text-strong">John Sandman</h4>
              <p className="margin-bottom-10 text-primary text-uppercase">Account Manager</p>                                                                                                                                          
            </div>   
          </section>
        </main>
        {/* FOOTER */}
        <footer className="grid">
          {/* Footer - top */}
          {/* Image*/}
          <div className="s-12 l-3 m-row-3 margin-bottom background-image" style={{backgroundImage:'url(img/img-04.jpg)'}} />
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