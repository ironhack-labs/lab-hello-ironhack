export default function Navbar() {
  const style = {
    backgroundColor: "#1f2535",
  };

  return (
    <nav
      className="navbar navbar-light  justify-content-between"
      style={{ backgroundColor: "#1f2535" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/images/ironhack-logo.svg"
            width="30"
            height="30"
            alt=""
            loading="lazy"
          />
        </a>
        <a className="navbar-brand" href="/">
          <img
            src="/images/menu-top.svg"
            width="30"
            height="30"
            alt=""
            loading="lazy"
          />
        </a>
      </div>
    </nav>
  );
}
