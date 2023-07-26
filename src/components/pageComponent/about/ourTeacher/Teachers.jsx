import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtoTCHovered from "../../tameplates/BtoTCHovered";
import { HoverMenu, NonhoverMenu } from "../../tameplates/HoverMenu";
import classes from "./Teachers.module.css";
import img from "../../../../assets/teacher.bmp";

function Teachers() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.conatiner}>
          <div className={classes.content}>
            <div className={classes.buttonWrapper}>
              <Link onClick={() => handleButtonClick(1)}>
                <NonhoverMenu
                  nonHoveredText="Chemical Engineering"
                  width="155px"
                />
              </Link>
              <Link onClick={() => handleButtonClick(2)}>
                <HoverMenu hoveredText="Computer Scence" width="155px" />
              </Link>
              <Link onClick={() => handleButtonClick(3)}>
                <HoverMenu hoveredText="Technology Management" width="155px" />
              </Link>
              <Link onClick={() => handleButtonClick(4)}>
                <HoverMenu
                  hoveredText="Art % Design Department"
                  width="155px"
                />
              </Link>

              <Link onClick={() => handleButtonClick(5)}>
                <HoverMenu
                  hoveredText="Department of Public Health"
                  width="155px"
                />
              </Link>

              <Link onClick={() => handleButtonClick(6)}>
                <HoverMenu hoveredText="Mathematics Departent" width="155px" />
              </Link>

              <Link onClick={() => handleButtonClick(7)}>
                <HoverMenu hoveredText="Political Science" width="155px" />
              </Link>
            </div>
            <div className={classes.teacherWrapper}>
              {activeButton === 1 && (
                <>
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                </>
              )}

              {activeButton === 2 && (
                <>
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                </>
              )}

              {activeButton === 3 && (
                <>
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                </>
              )}
              {activeButton === 4 && (
                <>
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                </>
              )}
              {activeButton === 5 && (
                <>
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                </>
              )}
              {activeButton === 6 && (
                <>
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                </>
              )}
              {activeButton === 7 && (
                <>
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                  <BtoTCHovered
                    img={img}
                    designation="Professor"
                    name="Leonardo De Pakrio"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachers;
