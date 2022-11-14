import Header from "./header";
import Footer from "./footer";
import Link from "./Links";

function Place() {
  const styleP = {
    fontSize: 12,
    color: "#434343",
    textAlign: "start",
    marginLeft: 15,
    marginRight: 15,
  };

  const images = [
    { id: 1, image: "images/Frame 151.png" },
    { id: 2, image: "images/Frame 151 (1).png" },
    { id: 3, image: "images/Frame 151 (2).png" },
    { id: 4, image: "images/Frame 151 (3).png" },
    { id: 7, image: "images/Frame 151 (6).png" },
    { id: 8, image: "images/Frame 02.png" },
    { id: 6, image: "images/Frame 151 (5).png" },
    { id: 5, image: "images/Frame 151 (4).png" },
    { id: 9, image: "images/frame-1.png" },
    { id: 10, image: "images/frame-2.png" },
    { id: 11, image: "images/frame-3.png" },
    { id: 12, image: "images/frame-4.png" },
    { id: 13, image: "images/frame-5.png" },
    { id: 14, image: "images/frame-6.png" },
    { id: 15, image: "images/frame-7.png" },
    { id: 16, image: "images/frame-8.png" },
  ];
  return (
    <>
      <div className="place-to-stay">
        <Header />
        <Link />
        <div className="container">
          {images.map((image) => {
            return (
              <article key={image.id}>
                <img src={image.image} alt="#" className="house" />
                <p style={styleP}>
                  Desert King{" "}
                  <span style={{ float: "right", fontWeight: "bold" }}>
                    IMBT per night
                  </span>
                </p>
                <p style={styleP}>
                  2345km away{" "}
                  <span style={{ float: "right" }}>
                    available for 2weeks stay
                  </span>
                </p>
                <div
                  className="image-container"
                  style={{ marginLeft: 15, marginTop: -5 }}
                >
                  <img src="images/Star 2.png" alt="#" />
                  <img src="images/Star 2.png" alt="#" />
                  <img src="images/Star 2.png" alt="#" />
                  <img src="images/Star 2.png" alt="#" />
                  <img src="images/Star 2.png" alt="#" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Place;
