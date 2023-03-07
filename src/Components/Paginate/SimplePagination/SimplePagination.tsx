import React from "react";
import "./simple-pagination.css";
export default function SimplePagination() {
  return (
    <div className="simple--pagination">
      <a href="#" title="previous page">
        Previous
      </a>
      <a href="#">1</a>
      <a href="#" className="simple--page-active">
        2
      </a>
      <a href="#">3</a>
      <span className="simple--page-dots">...</span>
      <a href="#">6</a>
      <a href="#" title="simple--next page">
        Next
      </a>
    </div>
  );
}
