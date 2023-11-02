import { Header, Footer, MetaTags } from './CommonComponents';
function Gallery() {
  return (
    <>
    <MetaTags />
                 <Header />
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
          <img className="s-12 m-6 margin-bottom" src={require("/workspace/react-bricker/src/img/portfolio/thumb-01.jpg")} alt="" />
          <img className="s-12 m-6 margin-bottom" src={require("/workspace/react-bricker/src/img/portfolio/thumb-02.jpg")} alt="" />
          <img className="s-12 m-6 margin-bottom" src={require("/workspace/react-bricker/src/img/portfolio/thumb-03.jpg")} alt="" />
          <img className="s-12 m-6 margin-bottom" src={require("/workspace/react-bricker/src/img/portfolio/thumb-04.jpg")} alt="" />
          <img className="s-12 m-6 margin-bottom" src={require("/workspace/react-bricker/src/img/portfolio/thumb-05.jpg")} alt="" />
          <img className="s-12 m-6 margin-bottom" src={require("/workspace/react-bricker/src/img/portfolio/thumb-06.jpg")} alt="" />
          <img className="s-12 m-6 margin-bottom" src={require("/workspace/react-bricker/src/img/portfolio/thumb-07.jpg")} alt="" />
          <img className="s-12 m-6 margin-bottom" src={require("/workspace/react-bricker/src/img/portfolio/thumb-08.jpg")} alt="" />
        </section>
      </main>
      {/* FOOTER */}
      <Footer />                                                             
    </>
  );
}
export default Gallery;