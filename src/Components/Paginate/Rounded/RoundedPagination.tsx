import React from "react";
import "./rounded-pagination.css";
export default function RoundedPagination() {
  return (
    <div className="rounded--pagination">
      <a href="#" title="first page">
        <svg fill="currentColor">
          <path d="M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6zM11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
        </svg>
      </a>
      <a href="#" title="previous page">
        <svg fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </a>
      <a href="#">1</a>
      <a href="#" className="rounded--page-active">
        2
      </a>
      <a href="#">3</a>
      <span className="rounded--page-dots">...</span>
      <a href="#">6</a>
      <a href="#" title="next page">
        <svg fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>
      <a href="#" title="last page">
        <svg fill="currentColor">
          <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6zM13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
        </svg>
      </a>
    </div>
  );
}
