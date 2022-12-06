function Discover() {
  return (
    <div className="nfts">
      <section>
        <h1 style={{ fontWeight: 700, fontSize: 48 }}>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button
          type="button"
          style={{
            background:
              "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
            borderRadius: 8,
            width: 156,
            height: 48,
            fontSize: 14,
            border: "none",
            color: "#a02279",
            marginTop: 50,
          }}
        >
          Learn more
        </button>
      </section>
      <section>
        {/* <div className="interior">
          <div className="upper"> */}
        <img src="images/image 9.png" alt="#" className="upper" />
        {/* </div>
          <div className="middle"> */}
        <img src="images/image 7.png" alt="#" className="middle" />
        {/* </div>
          <div className="lower"> */}
        <img src="images/image 8.png" alt="#" className="lower" />
        {/* </div>
        </div> */}
      </section>
    </div>
  );
}

export default Discover;
