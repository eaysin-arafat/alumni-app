import React from "react";
import classes from "./NewsListItem.module.css";

function NewsListItem(props) {
  return (
    <>
      <ul className={classes.content}>
        <li>
          <div className={classes.imgItem}>
            <img src={props.img} alt="" className={classes.img} />
          </div>
        </li>
        <li className={classes.newsListItemContent}>
          <div className={classes.newsListItem}>
            <p className={classes.catagory}>{props.catagory}</p>
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.desc}>{props.desc}</p>
            <p className={classes.date}>{props.date}</p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default NewsListItem;
