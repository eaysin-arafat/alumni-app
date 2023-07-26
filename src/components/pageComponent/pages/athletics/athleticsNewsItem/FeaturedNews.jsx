import React from "react";
import classes from "./FeaturedNews.module.css";
import img from "../../../../../assets/event-background.jpg";
import { MdOutlineUnsubscribe } from "react-icons/md";

function FeaturedNews() {
  return (
    <>
      <div className={classes.container}>
        <main>
          <div className={classes.content}>
            <div className={classes.rightSide}>
              <div className={classes.newsLists}>
                <div className={classes.news}>
                  <img src={img} alt="" />
                  <div className={classes.newsContent}>
                    <p className={classes.catagory}>Athletics</p>
                    <h3 className={classes.title}>
                      Students Take crush course in Japanese sword fighting
                    </h3>
                    <p className={classes.date}>August 31, 2016</p>
                  </div>
                </div>

                <div className={classes.newsList}>
                  <div className={classes.newsListItems}>
                    <ul>
                      <li>
                        <div>
                          <img
                            src={img}
                            alt=""
                            className={classes.imgItemImg}
                          />
                        </div>
                      </li>
                      <li className={classes.newsListItemContent}>
                        <div>
                          <p className={classes.catagory}>Athletics</p>
                          <h3 className={classes.title}>
                            Students Take crush course in Japanese sword
                            fighting
                          </h3>
                          <p className={classes.date}>August 31, 2016</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className={classes.newsListItems}>
                    <ul>
                      <li>
                        <div>
                          <img
                            src={img}
                            alt=""
                            className={classes.imgItemImg}
                          />
                        </div>
                      </li>
                      <li className={classes.newsListItemContent}>
                        <div>
                          <p className={classes.catagory}>Athletics</p>
                          <h3 className={classes.title}>
                            Students Take crush course in Japanese sword
                            fighting
                          </h3>
                          <p className={classes.date}>August 31, 2016</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className={classes.newsListItems}>
                    <ul>
                      <li>
                        <div>
                          <img
                            src={img}
                            alt=""
                            className={classes.imgItemImg}
                          />
                        </div>
                      </li>
                      <li className={classes.newsListItemContent}>
                        <div>
                          <p className={classes.catagory}>Athletics</p>
                          <h3 className={classes.title}>
                            Students Take crush course in Japanese sword
                            fighting
                          </h3>
                          <p className={classes.date}>August 31, 2016</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.leftSide}>
              <div className={classes.subscriber}>
                <span className={classes.icon}>
                  <MdOutlineUnsubscribe
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "40px",
                    }}
                  />
                </span>
                <div className={classes.subsText}>
                  <h2>Subscribe</h2>
                  <p>to our newsletter</p>
                </div>
                <form action="" className={classes.formControl}>
                  <input type="text" placeholder="Enter your E-mail" />
                  <button type="submit">YES, PLEASE</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default FeaturedNews;
