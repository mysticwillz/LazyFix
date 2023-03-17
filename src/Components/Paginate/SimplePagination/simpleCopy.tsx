export const simpleHtmlCode: string = `    <div class="simple--pagination">
      <a href="#" title="previous page">
        Previous
      </a>
      <a href="#">1</a>
      <a href="#" class="simple--page-active">
        2
      </a>
      <a href="#">3</a>
      <span class="simple--page-dots">...</span>
      <a href="#">6</a>
      <a href="#" title="simple--next page">
        Next
      </a>
    </div>  `;
export const simpleCssCode: string = `.simple--pagination {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.simple--pagination > a,
.simple--pagination > span {
  background-color: #fff;
  color: #636363;
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
.simple--pagination > span {
  pointer-events: none;
}
.simple--pagination svg {
  height: 24px;
  width: 24px;
}
.simple--pagination > a:hover {
  background-color: #3da914;
  color: #fff;
}
.simple--pagination > a.simple--page-active {
  background-color: #3da914;
  color: #fff;
}
.simple--pagination > a:first-child {
  border-radius: 10px 0 0 10px;
}
.simple--pagination > a:last-child {
  border-radius: 0 10px 10px 0;
}
`;
