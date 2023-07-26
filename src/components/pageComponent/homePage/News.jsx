import React from "react";
import classes from "./News.module.css";
import img from "../../../assets/slider3.png";
import { MdOutlineUnsubscribe } from "react-icons/md";

function News() {
  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>
          <h1>Latest News</h1>
          <a href="/">
            <span>See all</span> news
          </a>
        </header>
        <main>
          <div className={classes.content}>
            <div className={classes.rightSide}>
              <div className={classes.newsManu}>
                <ul>
                  <li className={classes.firstChild}>All</li>
                  <li>Adademics</li>
                  <li>Schools</li>
                  <li>Athletics</li>
                  <li>Campus Life</li>
                </ul>
              </div>

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
                          <h3 className={classes.listTitle}>
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
                          <h3 className={classes.listTitle}>
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
                          <h3 className={classes.listTitle}>
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

export default News;
