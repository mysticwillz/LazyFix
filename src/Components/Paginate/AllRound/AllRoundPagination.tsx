import React from "react";
import "./allround-pagination.css";
export default function AllRoundPagination() {
  return (
    <div className="all--round--pagination">
      <a href="#" title="previous page">
        <svg fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>{" "}
        Previous
      </a>
      <a href="#">1</a>
      <a href="#" className="all--round--page-active">
        2
      </a>
      <a href="#">3</a>
      <span className="all--round--page-dots">...</span>
      <a href="#">6</a>
      <a href="#" title="next page">
        Next{" "}
        <svg fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>
    </div>
  );
}
