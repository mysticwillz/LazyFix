import React from "react";
import styled from "styled-components";
import "./blue-paginate.css";
function BluePagination() {
  return (
    <div className="pagination">
      <a href="#" title="previous page">
        Previous
      </a>
      <a href="#">1</a>
      <a href="#" className="page-active">
        2
      </a>
      <a href="#">3</a>
      <span className="page-dots">...</span>
      <a href="#">6</a>
      <a href="#" title="next page">
        Next
      </a>
    </div>
  );
}

export default BluePagination;
