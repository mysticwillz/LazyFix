export const allroundHtmlCode: string = ` <div class="all--round--pagination">
      <a href="#" title="previous page">
        <svg fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>{" "}
        Previous
      </a>
      <a href="#">1</a>
      <a href="#" class="all--round--page-active">
        2
      </a>
      <a href="#">3</a>
      <span class="all--round--page-dots">...</span>
      <a href="#">6</a>
      <a href="#" title="next page">
        Next{" "}
        <svg fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>
    </div>
`;

export const allroundCssCode: string = `.all--round--pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}
.all--round--pagination > a,
.all--round--pagination > span {
  background: #1fadc3;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin: 0 -1px 5px;
  min-width: 20px;
  padding: 0 10px;
  height: 40px;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.25);
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.35);
}
.all--round--pagination > span {
  pointer-events: none;
}
.all--round--pagination svg {
  height: 24px;
  width: 24px;
}
.all--round--pagination > a.all--round--page-active {
  background: #328e9c;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.25);
}
.all--round--pagination > a:hover {
  background: #328e9c;
}
.all--round--pagination > a:first-child {
  border-radius: 20px 0 0 20px;
}
.all--round--pagination > a:last-child {
  border-radius: 0 20px 20px 0;
}

`;
