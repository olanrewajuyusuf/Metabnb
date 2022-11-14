import Header from "./header";
import Footer from "./footer";
import Discover from "./Nfts";
import Housing from "./Housing";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <Header />
        <main id="Home">
          <article className="left">
            <h1 className="content">
              Rent a <span className="color">Place</span> away from
              <span className="color"> Home</span> in the
              <span className="color"> Metaverse</span>
            </h1>
            <p>
              We provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your confort zone
            </p>
            <div className="input-field">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for location"
              />
              <button type="search">Search</button>
            </div>
          </article>
          <article className="right">
            <div className="img-1">
              <img src="images/image 4.png" alt="#" />
              <img src="images/image 6.png" alt="#" />
            </div>
            <div className="img-2">
              <img src="images/image 3.png" alt="#" />
              <img src="images/image 5.png" alt="#" />
            </div>
          </article>
        </main>
        <section className="foot">
          <img src="images/Frame 137.png" alt="#" />
        </section>
      </div>
      <Housing />
      <Discover />
      <Footer />
    </>
  );
}

export default HomePage;
