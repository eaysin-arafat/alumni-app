import React, { useState } from "react";
import { FAQData } from "./data/FAQData";
import classes from "./ApplicationsFAQIndex.module.css";
import { TiTimes } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import AskQuestionForm from "../../tameplates/AskQuestionForm";
import Search from "../../tameplates/Search";
import Download from "../../tameplates/Download";
import MiniGallary from "../../news/MiniGallary";
import NewsCalendar from "../../news/NewsCalendar";

function ApplicationsFAQIndex() {
  const [accordion, setAccordion] = useState(0);

  const toggleAccordion = (index) => {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  };

  const availabelTags = [
    "parents",
    "school",
    "students",
    "teachers",
    "university",
  ];

  const element = (
    <div style={{ marginBottom: "40px", marginTop: "20px" }}>
      <h2 style={{ fontSize: "30px", marginBottom: "25px" }}>
        {" "}
        Ask a question
      </h2>
      <p>
        If you do not find the answer for your question, you can ask us by
        submitting it using form below:
      </p>
    </div>
  );

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.left}>
              <h2> Applications FAQ</h2>

              <div className={classes.accorkingFAQ}>
                {FAQData.map((item, index) => (
                  <div
                    className={classes.accordion}
                    key={index}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div
                      className={
                        accordion === index
                          ? classes.active
                          : classes.titleInactive
                      }
                    >
                      <div className={classes.accorkingFAQHeading}>
                        <h3>{item.question}</h3>
                      </div>

                      <div>
                        {accordion === index ? (
                          <>
                            <TiTimes
                              style={{ fontSize: "19px", color: "#8c1515" }}
                            />
                          </>
                        ) : (
                          <>
                            <FaPlus style={{ color: "#8c1515" }} />
                          </>
                        )}
                      </div>
                    </div>
                    <div>
                      <p
                        className={
                          accordion === index
                            ? classes.inActive
                            : classes.accordingActive
                        }
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <AskQuestionForm textElement={element} />
            </div>

            <div className={classes.right}>
              <Search />
              <Download title="Download" desc="The Welcome Kit" />
              <MiniGallary />

              <div className={classes.tags}>
                <h2>Tags Cloud</h2>
                {availabelTags.map((tag, index) => (
                  <button
                    className={classes.tag}
                    key={index}
                    // onClick={() => handleTagChange({ target: { value: tag } })}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <NewsCalendar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationsFAQIndex;
