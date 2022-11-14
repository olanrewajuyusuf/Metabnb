import { IoCloseOutline } from "react-icons/io5";

function ConnectWallet() {
  const handleClick = () => {
    document.querySelector(".modal").style.display = "none";
  };
  return (
    <div className="modal">
      <article>
        <header
          style={{
            width: "100%",
            height: 78,
            borderBottom: "1px solid #CFD8DC",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontSize: 24, marginLeft: 30, color: "#333333" }}>
            Connect Wallet
          </h3>
          <IoCloseOutline
            onClick={handleClick}
            id="close"
            style={{
              fontSize: 24,
              marginRight: 30,
              color: "#333333",
              cursor: "pointer",
            }}
          />
        </header>
        <main
          style={{
            display: "block",
            margin: "30px 30px",
          }}
        >
          <p style={{ color: "#333333", fontSize: 16 }}>
            Choose your preferred wallet:
          </p>
          <div className="wallet-box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="images/image 66.png"
                alt="#"
                style={{ marginLeft: 20, marginRight: 10 }}
              />
              <p style={{ fontFamily: "Sora", fontSize: 18 }}>Metamask</p>
            </div>

            <img src="images/Arrow.png" alt="#" style={{ marginRight: 20 }} />
          </div>
          <div className="wallet-box">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="images/image 69.png"
                alt="#"
                style={{ marginLeft: 20, marginRight: 10 }}
              />
              <p style={{ fontFamily: "Sora", fontSize: 18 }}>WalletConnect</p>
            </div>
            <img src="images/Arrow.png" alt="#" style={{ marginRight: 20 }} />
          </div>
        </main>
      </article>
    </div>
  );
}

export default ConnectWallet;
