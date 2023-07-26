import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NonhoverMenu, HoverMenu } from "../../tameplates/HoverMenu";
import { championShipData } from "./athleticsNewsItem/championShipData";
import FeaturedNews from "./athleticsNewsItem/FeaturedNews";
import classes from "./AthleticsNews.module.css";
import UpcomingEvents from "./athleticsNewsItem/UpcomingEvents";
import Championships from "./athleticsNewsItem/Championships";
import Facilities from "./athleticsNewsItem/Facilities";

function AthleticsNews() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.dayList}>
              <Link onClick={() => handleButtonClick(1)}>
                <NonhoverMenu nonHoveredText="Featured News" width="270px" />
              </Link>

              <Link onClick={() => handleButtonClick(2)}>
                <HoverMenu hoveredText="Upcoming Event" width="270px" />
              </Link>

              <Link onClick={() => handleButtonClick(3)}>
                <HoverMenu hoveredText="Championships" width="270px" />
              </Link>

              <Link onClick={() => handleButtonClick(4)}>
                <HoverMenu hoveredText="Facilities" width="270px" />
              </Link>
            </div>

            <div className={classes.contentList}>
              {activeButton === 1 && (
                <>
                  <FeaturedNews />
                </>
              )}
              {activeButton === 2 && (
                <>
                  <UpcomingEvents />
                </>
              )}

              {activeButton === 3 && (
                <>
                  <div className={classes.champList}>
                    {championShipData.map((champion, index) => (
                      <Championships
                        icon={champion.sportsIcon}
                        sportsName={champion.sportsName}
                        items={champion.laagueDetails}
                      />
                    ))}
                  </div>
                </>
              )}

              {activeButton === 4 && (
                <>
                  <Facilities />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AthleticsNews;
