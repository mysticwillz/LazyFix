export const middleHtmlCode: string = `    <main id="link--middle--main">
      <header class="link--middle--header">
        <h2 class="link--middle--logo">
          Lazy<span>Fix</span>
        </h2>
        <nav>
          <ul class="link--middle--links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
          </ul>
        </nav>
        <a href="#" class="link--middle--cta">
          <button>contact us</button>
        </a>
      </header>
    </main>`;
export const middleCssCode: string = `@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,500;1,300;1,500&display=swap");

#link--middle--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kanit", sans-serif;
}

  .link--middle--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background-color: azure;
    padding: 0 30px;
  }

.link--middle--logo {
  color: rgb(26, 85, 85);
  font-size: 1.5rem;
}
.link--middle--logo span {
  color: rgb(71, 178, 178);
  font-size: 1.6rem;
}

.link--middle--links {
  list-style-type: none;
}

.link--middle--links li {
  display: inline-block;
  padding: 0 10px;
  color: rgb(39, 85, 85);
  cursor: pointer;
  transition: all 0.3s ease;
}

.link--middle--links li:hover {
  color: rgb(67, 146, 146);
}
.link--middle--cta {
  text-decoration: none;
}

.link--middle--cta button {
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
.link--middle--cta button::after {
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

.link--middle--cta button:hover:after {
  height: 100%;
  width: 135%;
}

`;
