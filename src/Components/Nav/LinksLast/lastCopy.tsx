export const lastHtmlCode: string = `     <main id="link--last--main">
      <header class="link--last--header">
        <h2 class="link--last--logo">
          Lazy<span>Fix</span>
        </h2>

        <nav class="link--last--nav">
          <ul class="link--last--links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Blogs</li>
          </ul>
          <a href="#" class="link--last--cta">
            <button>contact us</button>
          </a>
        </nav>
      </header>
    </main>`;
export const lastCssCode: string = `@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,500;1,300;1,500&display=swap");

#link--last--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Kanit", sans-serif;
}

 .link--last--header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 70px;
    background-color: azure;
    padding: 0 30px;
  }

.link--last--logo {
  color: rgb(26, 85, 85);
  font-size: 1.5rem;
}
.link--last--logo span {
  color: rgb(71, 178, 178);
  font-size: 1.6rem;
}
.link--last--nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.link--last--links {
  list-style-type: none;
  margin-right: 10px;
}

.link--last--links li {
  display: inline-block;
  padding: 0 10px;
  color: rgb(39, 85, 85);
  cursor: pointer;
  transition: all 0.3s ease;
}

.link--last--links li:hover {
  color: rgb(67, 146, 146);
}
.link--last--cta {
  text-decoration: none;
}

.link--last--cta button {
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
.link--last--cta button::after {
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

.link--last--cta button:hover:after {
  height: 100%;
  width: 135%;
}


`;
