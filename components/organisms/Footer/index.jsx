import FooterMenu from "./FooterMenu";
import FooterLink from "./FooterMenu";

const Footer = () => {
  return (
    <div className="container py-3">
      <div className="row overflow-hidden">
        <div className="col-md-4">
          <p className=" fs-3">
            <span className="text-primary">Stay</span>cation.
          </p>
          <p className="fw-light fs-6">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md">
              <div className="row d-flex justify-content-center align-content-center">
                <FooterMenu
                  title="For Beginners"
                  link1="New Account"
                  link2="Start Booking a Room"
                  link3="Use Payments"
                  href1="/"
                  href2="/"
                  href3="/"
                />
                <FooterMenu
                  title="Explore Us"
                  link1="Our Careers"
                  link2="Privacy"
                  link3="Terms & Conditions"
                  href1="/s"
                  href2="/"
                  href3="/"
                />
                <FooterMenu
                  title="Connect Us"
                  link1="Support@staycation.id"
                  link2="021-2208-1996"
                  link3="Staycation,Jatibening,Bekasi"
                  href1="/"
                  href2="/"
                  href3="/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
