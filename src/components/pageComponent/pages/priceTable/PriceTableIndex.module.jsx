import React, { useState } from "react";
import classes from "./PriceTableIndex.module.css"; // Import external CSS file for styling
import { FaTimes } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { MdKeyboardArrowRight } from "react-icons/md";

const PriceTableIndex = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 10,
      yearlyPrice: 100,
    },
    {
      name: "Standard",
      monthlyPrice: 20,
      yearlyPrice: 200,
    },
    {
      name: "Premium",
      monthlyPrice: 30,
      yearlyPrice: 300,
    },
  ];

  const toggleToMonthly = () => {
    setIsYearly(false);
  };

  const toggleToYearly = () => {
    setIsYearly(true);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h2>Price Table</h2>

        <div className={classes.content}>
          <div className={classes.priceTable}>
            <div className={classes.buttons}>
              <button
                onClick={toggleToMonthly}
                className={`${classes.toggleButton} ${
                  !isYearly ? classes.toggleButton : ""
                }`}
              >
                Monthly
              </button>
              <button
                onClick={toggleToYearly}
                className={`${classes.toggleButton} ${
                  isYearly ? classes.active : ""
                }`}
              >
                Yearly
              </button>
            </div>

            <div className={classes.plansContainer}>
              {plans.map((plan) => (
                <div key={plan.name} className={classes.planCard}>
                  <h3 className={classes.planName}>{plan.name}</h3>
                  <div className={classes.price}>
                    {isYearly
                      ? `$${plan.yearlyPrice}/year`
                      : `$${plan.monthlyPrice}/month`}
                  </div>
                </div>
              ))}
            </div>

            <div className={classes.one}>
              <p className={classes.priceText}>
                Languages: Chinese, Spanish, Japanese
              </p>
              <i>
                <ImCheckmark />
              </i>
              <i>
                <FaTimes />
              </i>
              <i>
                <FaTimes />
              </i>
            </div>

            <div className={classes.two}>
              <p className={classes.priceText}>
                Cafeteria: Breakfast, Lunch, Supper
              </p>
              <i>
                <ImCheckmark />
              </i>
              <i>
                <FaTimes />
              </i>
              <i>
                <ImCheckmark />
              </i>
            </div>

            <div className={classes.three}>
              <p className={classes.priceText}>Sport games and activities</p>
              <i>
                <FaTimes />
              </i>
              <i>
                <ImCheckmark />
              </i>
              <i>
                <ImCheckmark />
              </i>
            </div>

            <div className={classes.four}>
              <p className={classes.priceText}>Camping on Mountains</p>
              <i>
                <ImCheckmark />
              </i>
              <i>
                <FaTimes />
              </i>
              <i>
                <ImCheckmark />
              </i>
            </div>

            <div className={classes.five}>
              <p className={classes.priceText}>School Bus</p>
              <i>
                <ImCheckmark />
              </i>
              <i>
                <FaTimes />
              </i>
              <i>
                <ImCheckmark />
              </i>
            </div>

            <div className={classes.six}>
              <p className={classes.priceText}>
                Cafeteria: Breakfast, Lunch, Supper
              </p>
              <i>
                <FaTimes />
              </i>
              <i>
                <ImCheckmark />
              </i>
              <i>
                <ImCheckmark />
              </i>
            </div>

            <div className={classes.seven}>
              <p className={classes.priceText}>Sport games</p>
              <i>
                <FaTimes />
              </i>
              <i>
                <FaTimes />
              </i>
              <i>
                <ImCheckmark />
              </i>
            </div>

            <div className={classes.bottoms}>
              <div className={classes.bottomButton}>
                <button className={classes.button}>
                  <span>Purchase</span> <MdKeyboardArrowRight />
                </button>
              </div>

              <div className={classes.bottomButton}>
                <button className={classes.button}>
                  <span>Purchase</span> <MdKeyboardArrowRight />
                </button>
              </div>

              <div className={classes.bottomButton}>
                <button className={classes.button}>
                  <span>Purchase</span> <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTableIndex;
