import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  const styles = {
    maxWidth: 1440,
    background: "#1D1D1E",
    color: "white",
    fontSize: 14,
  };
  return (
    <footer style={styles}>
      <section>
        <div style={{ marginTop: 80 }}>
          <img src="images/Group (1).png" alt="#" />
        </div>

        <div className="icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
        <p>&copy; 2022 Metabnb</p>
      </section>
      <section>
        <p className="bold">Community</p>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </section>
      <section>
        <p className="bold">Places</p>
        <p>Castle</p>
        <p>Farm</p>
        <p>Beach</p>
        <p>Learn more</p>
      </section>
      <section>
        <p className="bold">About</p>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </section>
    </footer>
  );
}

export default Footer;
