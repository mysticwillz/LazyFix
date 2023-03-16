export const pinkHtmlCode: string = `    <main id="pink--contact--us--main">
      <div class="contact-form">
        <span class="pink--contact--us--heading">Contact Us</span>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>`;
export const pinkCssCode: string = `#pink--contact--us--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .contact-form {
    background-color: #ecdede;
    padding: 20px;
    border-radius: 10px;
    height: auto;
  }
  textarea {
    resize: none;
    height: 80px;
    width: 200px;
  }
.contact-form label {
  color: black;
}
  .contact-form .pink--contact--us--heading {
    font-size: 30px;
    color: black;
    margin-bottom: 12px;
    font-weight: bold;
    display: block;
    text-align: center;
  }

.contact-form form {
  display: flex;
  flex-direction: column;
}


  .contact-form label {
    margin-bottom: 7px;
    font-size: 24px;
  }

.contact-form label {
  margin-bottom: 2px;
  font-size: 12px;
}



  .contact-form input,
  .contact-form textarea {
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 0 5px #ff6384;
  }

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  box-shadow: 0 0 5px #382acc;
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.contact-form button[type="submit"] {
  background-color: #ff6384;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.contact-form button[type="submit"]:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

`;
