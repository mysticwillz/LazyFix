export const roundedHtmlCode: string = `      <div class="rounded--pagination">
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
      <a href="#" class="rounded--page-active">
        2
      </a>
      <a href="#">3</a>
      <span class="rounded--page-dots">...</span>
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
    </div>`;
export const roundedCssCode: string = `.rounded--pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.rounded--pagination > a,
.rounded--pagination > span {
  background-color: #ddd;
  color: #636363;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 17px;
  margin: 0 3px 5px;
  width: 40px;
  height: 40px;
  text-decoration: none;
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
}
.rounded--pagination > span {
  pointer-events: none;
}
.rounded--pagination svg {
  height: 24px;
  width: 24px;
}
.rounded--pagination > a:hover {
  background-color: #0091ff;
  color: #fff;
}
.rounded--pagination > a.rounded--page-active {
  background-color: #0091ff;
  color: #fff;
}
`;
