import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HoverMenu, NonhoverMenu } from "../../tameplates/HoverMenu";
import img1 from "../../../../assets/menuImages/lunch1.bmp";
import img2 from "../../../../assets/menuImages/lunch2.bmp";
import classes from "./CafeteriaMenu.module.css";
import Menu from "./Menu";
import { MdKeyboardArrowRight } from "react-icons/md";

function CafeteriaMenu() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <h2>Menu</h2>
            <div className={classes.dayList}>
              <Link onClick={() => handleButtonClick(1)}>
                <NonhoverMenu nonHoveredText="Friday" width="180px" />
              </Link>

              <Link onClick={() => handleButtonClick(2)}>
                <HoverMenu hoveredText="Monday" width="180px" />
              </Link>

              <Link onClick={() => handleButtonClick(3)}>
                <HoverMenu hoveredText="Saturday" width="180px" />
              </Link>

              <Link onClick={() => handleButtonClick(4)}>
                <HoverMenu hoveredText="Thrusday" width="180px" />
              </Link>

              <Link onClick={() => handleButtonClick(5)}>
                <HoverMenu hoveredText="Tuesday" width="180px" />
              </Link>

              <Link onClick={() => handleButtonClick(6)}>
                <HoverMenu hoveredText="Wednesday" width="180px" />
              </Link>
            </div>
            <div className={classes.mealDetails}>
              <div className={classes.mealLists}>
                {activeButton === 1 && (
                  <>
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />

                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />

                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                  </>
                )}

                {activeButton === 2 && (
                  <>
                    <Menu
                      foodTime="Breakfast"
                      img1={img2}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img2}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />

                    <Menu
                      foodTime="Breakfast"
                      img1={img2}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img2}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />

                    <Menu
                      foodTime="Breakfast"
                      img1={img2}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img2}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                  </>
                )}
                {activeButton === 3 && (
                  <>
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                  </>
                )}

                {activeButton === 4 && (
                  <>
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />

                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />

                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                  </>
                )}

                {activeButton === 5 && (
                  <>
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                  </>
                )}

                {activeButton === 6 && (
                  <>
                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />

                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />

                    <Menu
                      foodTime="Breakfast"
                      img1={img1}
                      foodTitle1="Kashi Berry Blossoms"
                      foodDesc1="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                      img2={img1}
                      foodTitle2="Kashi Berry Blossoms"
                      foodDesc2="These crispy cereal squares are tossed with a real
                          fruit blend made with strawberries, blackberries and
                          blueberries for a natural."
                    />
                  </>
                )}
              </div>
            </div>
            <div className={classes.menuButton}>
              <button className={classes.button}>
                <p>Load More</p>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CafeteriaMenu;
