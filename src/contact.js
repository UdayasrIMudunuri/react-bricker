function Contact() {
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
            <img src={require("./img/logo.jpg")} />
          </a>
          <div className="top-nav s-12 l-9"> 
            <ul className="top-ul right chevron">
              <li><a href="/home">Home</a></li>
              <li><a href="/aboutUs">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      {/* MAIN */}
      <main role="main">
        {/* TOP SECTION */}
        <header className="grid">
          <div className="s-12 padding-2x">
            <h1 className="text-strong text-white text-center center text-size-60 text-uppercase margin-bottom-20">Contact Us</h1>
          </div>
        </header>
        {/* SECTION 1 */}
        <section className="grid margin-bottom-20">
          <div className="m-12 l-7 center">
            {/* Contact Information*/}
            <div className="s-12 padding-2x background-white text-center">                  
              <h2 className="text-size-20 margin-bottom-10 text-strong text-uppercase text-dark">Company Address</h2>                
              <p>Aviation Way 99</p>
              <p>Los Angeles, USA</p>             
              <h2 className="text-size-20 margin-top-30 margin-bottom-10 text-strong text-uppercase text-dark">E-mail</h2>                
              <p><a className="text-primary-hover" href="mailto:contact@sampledomain.com">contact@sampledomain.com</a></p>
              <p><a className="text-primary-hover" href="mailto:office@sampledomain.com">office@sampledomain.com</a></p>               
              <h2 className="text-size-20 margin-top-30 margin-bottom-10 text-strong text-uppercase text-dark">Phone Numbers</h2>                
              <p>0800 4521 800 50</p>
              <p>0450 5896 625 16</p>
              <p>0798 6546 465 </p>               
            </div>
            <iframe className="s-12 center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408353.5714751251!2d-118.71693940358037!3d33.79914670853249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b4655ccd2001%3A0xa7f54b3bb5afde44!2s99+Aviation+Blvd%2C+Manhattan+Beach%2C+CA+90266%2C+Spojen%C3%A9+%C5%A1t%C3%A1ty+americk%C3%A9!5e0!3m2!1ssk!2ssk!4v1558635197012!5m2!1ssk!2ssk" height={450} frameBorder={0} style={{border: 0}} allowFullScreen />  
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
          <img className="full-img" src={require("./img/map.jpg")} alt="" />
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
export default Contact;