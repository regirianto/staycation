import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white mb-5 shadow-sm sticky-top py-3">
      <div className="container ">
        <a className="navbar-brand fs-4" href="#">
          <span className="text-primary">Stay</span>cation.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <NavItem title="Home" href="#" active />
            <NavItem title="Browse By" href="#" />
            <NavItem title="Stories" href="#" />
            <NavItem title="Agent" href="#" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
