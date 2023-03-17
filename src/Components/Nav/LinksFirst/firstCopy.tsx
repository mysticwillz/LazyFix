export const firstHtmlCode: string = `      <main id="link--first--main">
      <header class="link--first--header">
        <nav class="link--first--nav">
          <ul class="link--first--links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
          </ul>
          <a href="#" class="link--first--cta">
            <button>contact us</button>
          </a>
        </nav>
        <h2 class="link--first--logo">
          Lazy<span>Fix</span>
        </h2>
      </header>
    </main>`;
export const firstCssCode: string = `@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,500;1,300;1,500&display=swap");

#link--first--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kanit", sans-serif;
}

  .link--first--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background-color: azure;
    padding: 0 30px;
  }

.link--first--logo {
  color: rgb(26, 85, 85);
  font-size: 1.5rem;
}
.link--first--logo span {
  color: rgb(71, 178, 178);
  font-size: 1.6rem;
}
.link--first--nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.link--first--links {
  list-style-type: none;
  margin-right: 10px;
}

.link--first--links li {
  display: inline-block;
  padding: 0 10px;
  color: rgb(39, 85, 85);
  cursor: pointer;
  transition: all 0.3s ease;
}

.link--first--links li:hover {
  color: rgb(67, 146, 146);
}
.link--first--cta {
  text-decoration: none;
}

.link--first--cta button {
  color: white;
  position: relative;
  border: none;
  transition: 0.6s ease-out;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 160px;
  height: 50px;
  background: rgb(26, 85, 85);
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
}
.link--first--cta button::after {
  position: absolute;
  content: "";
  z-index: -1;
  height: 100%;
  left: -35%;
  top: 0%;
  transform: skew(50deg);
  transition-duration: 0.6s;
  transform-origin: top left;
  width: 0;
  background: rgb(71, 178, 178);
}

.link--first--cta button:hover:after {
  height: 100%;
  width: 135%;
}


`;
