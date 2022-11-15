import { useState } from "react";
import { Link } from "react-router-dom";
import ConnectWallet from "./connect-wallet";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const lists = [
    { id: "a", list: "Home" },
    { id: "b", list: "Place to stay", route: "place" },
    { id: "c", list: "NFTs" },
    { id: "d", list: "Community" },
  ];

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };
  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  window.addEventListener("resize", function () {
    let browserWidth = window.innerWidth;
    if (browserWidth >= 800) {
      setShowMenu(true);
    }
  });

  return (
    <>
      <header>
        <img className="logo" src="images/Group.png" alt="#" />
        <GiHamburgerMenu className="hambuger" onClick={handleMenu} />
        {showMenu && (
          <nav className="header-nav">
            <ul>
              {lists.map((list) => {
                return (
                  <li key={list.id}>
                    <Link to={list?.route && list?.route}>{list.list}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
        {showMenu && (
          <button
            onClick={handleClick}
            className="connect-wallet"
            type="button"
          >
            Connect Wallet
          </button>
        )}
      </header>

      {showModal && <ConnectWallet />}
    </>
  );
}

export default Header;
