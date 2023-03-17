export const blueHtmlCode: string = `      <div class="pagination">
      <a href="#" title="previous page">
        Previous
      </a>
      <a href="#">1</a>
      <a href="#" class="page-active">
        2
      </a>
      <a href="#">3</a>
      <span class="page-dots">...</span>
      <a href="#">6</a>
      <a href="#" title="next page">
        Next
      </a>
    </div>`;
export const blueCssCode: string = `.pagination {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.pagination > a,
.pagination > span {
  background-color: #4361ee;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin: 0 3px 5px;
  min-width: 20px;
  height: 40px;
  text-decoration: none;
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
  padding: 1px 10px;
}
.pagination > span {
  pointer-events: none;
}
.pagination svg {
  height: 24px;
  width: 24px;
}
.pagination > a:hover {
  background-color: #95a0d3;
  color: white;
}
.pagination > a.page-active {
  background-color: #95a0d3;
  color: #fff;
}
.pagination > a:first-child {
  border-radius: 10px 0 0 10px;
}
.pagination > a:last-child {
  border-radius: 0 10px 10px 0;
}
`;
