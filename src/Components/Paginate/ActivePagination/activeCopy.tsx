export const activeHtmlCode: string = `    <div class="active--pagination">
      <a href="#" title="first page">
        <svg fill="currentColor">
          <path d="M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6zM11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
        </svg>{" "}
        First
      </a>
      <a href="#" title="previous page">
        <svg fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </a>
      <a href="#">1</a>
      <a href="#" class="active--page-active">
        2
      </a>
      <a href="#">3</a>
      <span class="active--page-dots">...</span>
      <a href="#">6</a>
      <a href="#" title="next page">
        <svg fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>
      <a href="#" title="last page">
        Last{" "}
        <svg fill="currentColor">
          <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6zM13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
        </svg>
      </a>
    </div>`;
export const activeCssCode: string = `.active--pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.active--pagination > a,
.active--pagination > span {
  background-color: #fff;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0 5px 8px;
  border-radius: 5px;
  min-width: 20px;
  padding: 0 10px;
  height: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
}
.active--pagination > span {
  pointer-events: none;
}
.active--pagination svg {
  height: 24px;
  width: 24px;
}
.active--pagination > a.active--page-active {
  background-color: #f00;
  color: #fff;
}
.active--pagination > a:hover {
  background-color: #f00;
  color: #fff;
}
`;
