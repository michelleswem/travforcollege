const Billing = () => {
  return (
    <section className="billing">
      <div className="billing__fee billing__fee--1">
        <div className="billing__fee-offer billing__fee-offer--white1">
          <h1 className="billing__primary-heading">What We Offer</h1>
          <h2 className="billing__secondary-heading">Handling Fees</h2>
        </div>
        <div className="billing__fee-offer billing__fee-offer--blue1">
          <h3 className="billing__tertiary-heading billing__tertiary-heading--white1">
            Trav4College
          </h3>
          <p className="billing__box">
            <span className="billing__dollar billing__dollar--white1">
              500 United States Dollars
            </span>
            <span className="billing__dollar billing__dollar--green1">
              -80 % OFF
            </span>
          </p>
        </div>
        <div className="billing__fee-offer billing__fee-offer--white1">
          <h3 className="billing__tertiary-heading">Others</h3>
          <p className="billing__box">
            <span className="billing__dollar">100 United States Dollars </span>
            <span className="billing__dollar billing__dollar--blue1">
              0% OFF
            </span>
          </p>
        </div>
      </div>
      <div className="billing__fee billing__fee--2">
        <div className="billing__fee-offer billing__fee-offer--white2">
          <h2 className="billing__secondary-heading">Visa Consulting</h2>
          <h2 className="billing__secondary-heading">Feedback Time</h2>
        </div>
        <div className="billing__fee-offer billing__fee-offer--blue2">
          <p className="billing__box">
            <span className="billing__dollar billing__dollar--white2">
              100 United States Dollars
            </span>
            <span className="billing__dollar billing__dollar--green2">
              -75 % OFF
            </span>
          </p>
          <h3 className="billing__tertiary-heading billing__tertiary-heading--white2">
            Three days
          </h3>
        </div>
        <div className="billing__fee-offer billing__fee-offer--white2">
          <p className="billing__box">
            <span className="billing__dollar"> 400 United States Dollars </span>
            <span className="billing__dollar billing__dollar--blue2">
              0% OFF
            </span>
          </p>
          <h3 className="billing__tertiary-heading">Over two weeks</h3>
        </div>
      </div>
    </section>
  );
};

export default Billing;
