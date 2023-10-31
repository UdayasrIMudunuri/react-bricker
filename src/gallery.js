function gallery() {
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
               <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">Our References</h1>
               <p className="text-size-20 text-white text-center center text-uppercase">Con nonummy sem integer interdum volutpat dis eget eligendi aliquip dolorum magnam. Iriure duis autem vel<br /> eum dolor in hendrerit in vulputate velit esse molestie consequat.</p>
             </div>
           </header>
           <section className="grid margin">
             <img className="s-12 m-6 margin-bottom" src={require("./img/portfolio/thumb-01.jpg")} alt="" />
             <img className="s-12 m-6 margin-bottom" src={require("./img/portfolio/thumb-02.jpg")} alt="" />
             <img className="s-12 m-6 margin-bottom" src={require("./img/portfolio/thumb-03.jpg")} alt="" />
             <img className="s-12 m-6 margin-bottom" src={require("./img/portfolio/thumb-04.jpg")} alt="" />
             <img className="s-12 m-6 margin-bottom" src={require("./img/portfolio/thumb-05.jpg")} alt="" />
             <img className="s-12 m-6 margin-bottom" src={require("./img/portfolio/thumb-06.jpg")} alt="" />
             <img className="s-12 m-6 margin-bottom" src={require("./img/portfolio/thumb-07.jpg")} alt="" />
             <img className="s-12 m-6 margin-bottom" src={require("./img/portfolio/thumb-08.jpg")} alt="" />
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