export const loadTextHtmlCode: string = `    <main id="load--text">
      <div class="load--spin"> Loading</div>
    </main>`;
export const loadTextCssCode: string = ` @import url("https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap");

#load--text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.load--spin {
  font-family: "ZCOOL KuaiLe", sans-serif;
  font-size: 40px;
  color: rgb(63, 4, 36);
}


.load--spin::after {
  content: "2026 ";
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  width: 0;
  animation: dots steps(4, end) 2s infinite;
}
@keyframes dots {
  to {
    width: 45px;
  }
}
`;
