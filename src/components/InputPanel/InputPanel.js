import React, { useState } from "react";
import "./InputPanel.css";

export function InputPanel({ submitInput }) {
  const [inputValue, setInputValue] = useState({
    keyword: "",
    location: "",
    sortBy: "best_match",
  });

  const sortByOptions = {
    "Best match": "best_match",
    Rating: "rating",
    "Review count": "review_count",
  };
  const assignClassName = (value) => {
    if (value === inputValue.sortBy) {
      return "is_active";
    } else {
      return "";
    }
  };

  const renderSortOptions = () => {
    return Object.keys(sortByOptions).map((option) => {
      let optionValue = sortByOptions[option];
      return (
        <li
          className={assignClassName(optionValue)}
          key={optionValue}
          onClick={() => {
            setInputValue({
              keyword: inputValue.keyword,
              location: inputValue.location,
              sortBy: optionValue,
            });
          }}
        >
          {option}
        </li>
      );
    });
  };

  return (
    <form className="input-panel">
      <div>
        <ul className="input-panel__sort-options">{renderSortOptions()}</ul>
      </div>
      <input
        placeholder="What`s you`re looking for?"
        type="text"
        className="input-panel__keyword"
        name="keyword"
        onChange={(event) => {
          setInputValue({
            keyword: event.target.value,
            location: inputValue.location,
            sortBy: inputValue.sortBy,
          });
        }}
      ></input>
      <input
        placeholder="Where is it?"
        type="text"
        className="input-panel__location"
        name="location"
        onChange={(event) =>
          setInputValue({
            keyword: inputValue.keyword,
            location: event.target.value,
            sortBy: inputValue.sortBy,
          })
        }
      ></input>
      <input
        name="1"
        type="submit"
        className="input-panel__submit"
        onClick={(e) => {
          e.preventDefault();
          submitInput(
            inputValue.keyword,
            inputValue.location,
            inputValue.sortBy
          );
        }}
      ></input>
      <a
        href="&"
        onClick={(e) => {
          e.preventDefault();
          submitInput(
            inputValue.keyword,
            inputValue.location,
            inputValue.sortBy
          );
        }}
        className="input-panel__button"
      >
        Here we go!
      </a>
    </form>
  );
}
