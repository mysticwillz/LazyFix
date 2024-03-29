export const radiusHtmlCode: string = `   <main id="radius--signup--main">
      <form class="radius--signup--form">
        <p class="radius--signup--heading">Login</p>
        <input
          class="radius--signup--input"
          placeholder="Username"
          type="text"
        />
        <input
          class="radius--signup--input"
          placeholder="Password"
          type="text"
        />
        <button class="radius--signup--btn">Submit</button>
      </form>
    </main>`;
export const radiusCssCode: string = `#radius--signup--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .radius--signup--form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    padding: 2.5em;
    border-radius: 25px;
    transition: 0.4s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
  }
  .radius--signup--heading {
    color: black;
    padding-bottom: 2em;
    text-align: center;
    font-weight: bold;
  }

.radius--signup--form:hover {
  transform: translateX(-0.5em) translateY(-0.5em);
  border: 1px solid #171717;
  box-shadow: 10px 10px 0px #666666;
}



.radius--signup--input {
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 0.7em;
  transition: 0.4s ease-in-out;
}

.radius--signup--input:hover {
  box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
}

.radius--signup--input:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
}

.radius--signup--form .radius--signup--btn {
  margin-top: 2em;
  align-self: center;
  padding: 0.7em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 10px;
  border: none;
  color: black;
  transition: 0.4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
}

.radius--signup--form .radius--signup--btn:hover {
  box-shadow: 6px 6px 0px #969696, -3px -3px 10px #ffffff;
  transform: translateX(-0.5em) translateY(-0.5em);
}

.radius--signup--form .radius--signup--btn:active {
  transition: 0.2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
}

`;
