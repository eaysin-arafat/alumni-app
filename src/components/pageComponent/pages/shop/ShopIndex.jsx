import React, { useState } from "react";
import { booksData } from "./data/booksData";
import Search from "../../tameplates/Search";
import Menu from "../../tameplates/Menu";
import Book from "./Book";
import classes from "./ShopIndex.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import PopularBooks from "./PopularBooks";
import NotFoundItem from "./NotFoundItem";
function ShopIndex() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  let filteredBooks = [];

  switch (selectedFilter) {
    case "date":
      filteredBooks = [...booksData].sort((a, b) =>
        new Date(a.date) > new Date(b.date) ? -1 : 1
      );
      break;

    case "popularity":
      filteredBooks = [...booksData].filter((item) => item.popularity === true);
      break;

    case "price_high":
      filteredBooks = [...booksData].sort((a, b) =>
        a.price > b.price ? -1 : 1
      );
      break;

    case "price_low":
      filteredBooks = [...booksData].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      break;

    default:
      filteredBooks = booksData;
      break;
  }

  if (selectedTag !== "") {
    filteredBooks = filteredBooks.filter((item) =>
      item.tags.includes(selectedTag)
    );
  }

  const filteredPopularBookList = booksData.filter(
    (item) => item.popularity === true
  );

  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredBooks.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (value === "") {
      setSelectedFilter("");
      setSelectedTag("");
    } else {
      setSelectedFilter(value);
    }
    setCurrentPage(1);
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages && i <= 3; i++) {
    pageNumbers.push(i);
  }

  const availabelTags = [
    "alumni",
    "archive",
    "books",
    "calendar",
    "curricular",
    "donations",
    "events",
    "school",
    "students",
    "teachers",
    "university",
    "workshops",
    "highlights",
    "independent",
    "olympic",
    "parents",
    "prospectus",
  ];

  const shopItem = [
    "Books",
    "Courses",
    "Craft Kits",
    "Drawing & Painting",
    "Stationery",
    "Uncategorized",
  ];

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.up}>
              <div className={classes.left}>
                {currentItems.length > 0 ? (
                  <div className={classes.leftWrapper}>
                    <label className={classes.labelName} htmlFor="filterTag">
                      Showing all {filteredBooks.length} result
                    </label>
                    <select
                      className={classes.bookSelect}
                      value={selectedFilter}
                      onChange={handleFilterChange}
                    >
                      <option value="" className={classes.bookOption}>
                        Default sorting
                      </option>
                      <option value="popularity" className={classes.bookOption}>
                        Sory by polularity
                      </option>
                      <option value="date" className={classes.bookOption}>
                        Sort by latest
                      </option>
                      <option value="price_low" className={classes.bookOption}>
                        Sory by prise: low to high
                      </option>
                      <option value="price_high" className={classes.bookOption}>
                        Sory by prise: high to low
                      </option>
                    </select>
                  </div>
                ) : (
                  <>
                    <NotFoundItem />
                  </>
                )}

                <div className={classes.books}>
                  {currentItems.map((book, index) => (
                    <Book
                      key={index}
                      img={book.coverImage}
                      category={book.category}
                      bookName={book.name}
                      price={book.price}
                    />
                  ))}
                </div>
              </div>

              <div className={classes.right}>
                <Search />
                <Menu category="Shop Categories" data={shopItem} />

                <div className={classes.bestSalesBook}>
                  <h2>Best Sellers</h2>
                  <div className={classes.bookList}>
                    {filteredPopularBookList.map((book, index) => (
                      <PopularBooks
                        img={book.coverImage}
                        category={book.category}
                        name={book.name}
                      />
                    ))}
                  </div>
                </div>

                <div className={classes.tags}>
                  <h2>Tags Cloud</h2>
                  {availabelTags.map((tag, index) => (
                    <button
                      className={classes.tag}
                      key={index}
                      onClick={() =>
                        handleTagChange({ target: { value: tag } })
                      }
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
}

export default ShopIndex;
