function Link() {
  const button = {
    width: 161,
    height: 48,
    border: "1px solid #B4B4B4",
    borderRadius: 8,
    background: "linear-gradient(124.4deg, #FFFFFF 10.8%, #FFFFFF 87.34%)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 16,
    fontFamily: "Red Rose",
    color: "#333333",
    marginLeft: 30,
  };
  const links = [
    "Resturant",
    "Cottage",
    "Castle",
    "fantast city",
    "beach",
    "Carbin",
    "Off-grid",
    "Farm",
  ];
  return (
    <nav className="place-nav">
      <ul>
        {links.map((link) => {
          return (
            <li key={link} style={{ marginRight: 30 }}>
              <a href={link}>{link}</a>
            </li>
          );
        })}
      </ul>
      <button type="button" style={button}>
        Location <img src="images/setting-5.png" alt="#" />
      </button>
    </nav>
  );
}

export default Link;
