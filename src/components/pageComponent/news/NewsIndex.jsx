import React, { useState } from "react";
import NewsListItem from "../tameplates/NewsListItem";
import classes from "./NewsIndex.module.css";
import Search from "../tameplates/Search";
import Menu from "../tameplates/Menu";
import MiniGallary from "./MiniGallary";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { newsData } from "./data/newsData";
import NewsCalendar from "./NewsCalendar";

const NewsIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedtag, setSelectedtag] = useState("");

  let filteredArchives = [];

  switch (true) {
    case selectedMonth !== "" && selectedtag !== "":
      filteredArchives = newsData.filter(
        (news) =>
          news.month === selectedMonth && news.tags.includes(selectedtag)
      );
      break;

    case selectedMonth !== "":
      filteredArchives = newsData.filter(
        (news) => news.month === selectedMonth
      );
      break;

    case selectedtag !== "":
      filteredArchives = newsData.filter((news) =>
        news.tags.includes(selectedtag)
      );
      break;

    default:
      filteredArchives = newsData;
      break;
  }

  const itemsPerPage = 9;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredArchives.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setSelectedtag("");
    setCurrentPage(1);
  };

  const handleTagChange = (tag) => {
    setSelectedtag(tag);
    setSelectedMonth("");
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredArchives.length / itemsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages && i <= 3; i++) {
    pageNumbers.push(i);
  }

  const availabelTags = [
    "parents",
    "school",
    "students",
    "teachers",
    "university",
  ];

  const newsItem = [
    "Academics",
    "Alumni",
    "Athletics",
    "Campus Life",
    "Schools",
  ];

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.up}>
              <div className={classes.left}>
                {currentItems.map((article, index) => (
                  <NewsListItem
                    key={index}
                    img={article.img}
                    catagory={article.catagory}
                    title={article.title}
                    desc={article.desc}
                    date={article.date}
                  />
                ))}
              </div>

              <div className={classes.right}>
                <Search />
                <Menu category="Categories" data={newsItem} />
                <MiniGallary />
                <NewsCalendar />

                <div className={classes.archives}>
                  <label className={classes.labelName} htmlFor="month-select">
                    Archives
                  </label>
                  <select
                    className={classes.monthSelect}
                    value={selectedMonth}
                    onChange={handleMonthChange}
                  >
                    <option value="" className={classes.monthOption}>
                      All Month
                    </option>
                    <option value="March" className={classes.monthOption}>
                      March
                    </option>
                    <option value="April" className={classes.monthOption}>
                      April
                    </option>
                    <option value="May" className={classes.monthOption}>
                      May
                    </option>
                  </select>
                </div>

                <div className={classes.tags}>
                  <h2>Tags Cloud</h2>
                  {availabelTags.map((tag, index) => (
                    <button
                      className={classes.tag}
                      key={index}
                      onClick={() => handleTagChange(`${tag}`)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className={classes.bottom}>
              {currentPage > 1 && (
                <i
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={classes.icon}
                >
                  <MdKeyboardArrowLeft />
                </i>
              )}
              {pageNumbers.map((number) => (
                <button
                  onClick={() => handlePageChange(number)}
                  className={classes.btn}
                >
                  {number}
                </button>
              ))}
              <i
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={classes.icon}
              >
                <MdKeyboardArrowRight />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsIndex;
