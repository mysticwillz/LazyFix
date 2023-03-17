export const otpHtmlCode: string = ` <main id="otp--form--main">
      <form class="otp--form--form">
        <p class="otp--form--heading">Verify</p>
        <svg
          class="otp--form--check"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60px"
          height="60px"
          viewBox="0 0 60 60"
        >
          {" "}
          <image
            id="image0"
            width="60"
            height="60"
            x="0"
            y="0"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAQAAACQ9RH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0NDzN/r+StAAACR0lEQVRYw+3Yy2sTURTH8W+bNgVf
aGhFaxNiAoJou3FVEUQE1yL031BEROjCnf4PLlxILZSGYncuiiC48AEKxghaNGiliAojiBWZNnNd
xDza3pl77jyCyPzO8ubcT85wmUkG0qT539In+MwgoxQoUqDAKDn2kSNLlp3AGi4uDt9xWOUTK3xg
hVU2wsIZSkxwnHHGKZOxHKfBe6rUqFGlTkPaVmKGn6iYao1ZyhK2zJfY0FZ9ldBzsbMKxZwZjn/e
5szGw6UsD5I0W6T+hBhjUjiF7bNInjz37Ruj3igGABjbtpIo3GIh30u4ww5wr3fwfJvNcFeznhBs
YgXw70TYX2bY/ulkZhWfzfBbTdtrzjPFsvFI+T/L35jhp5q2owDs51VIVvHYDM9sa/LY8XdtKy1l
FXfM8FVN2/X2ajctZxVXzPA5TZvHpfb6CFXxkerUWTOcY11LX9w0tc20inX2mmF4qG3upnNWrOKB
hIXLPu3dF1x+kRWq6ysHpkjDl+7eQjatYoOCDIZF3006U0unVSxIWTgTsI3HNP3soSJkFaflMDwL
3OoHrph9YsPCJJ5466DyOGUHY3Epg2rWloUxnMjsNw7aw3AhMjwVhgW4HYm9FZaFQZ/bp6QeMRQe
hhHehWKXGY7CAuSpW7MfKUZlAUqWdJ3DcbAAB3guZl9yKC4WYLfmT4muFtgVJwvQx7T2t0mnXK6J
XlGGyAQvfNkaJ5JBmxnipubJ5HKDbJJsM0eY38QucSx5tJWTVHBwqDDZOzRNmn87fwDoyM4J2hRz
NgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wMi0xM1QxMzoxNTo1MCswMDowMKC8JaoAAAAldEVY
dGRhdGU6bW9kaWZ5ADIwMjMtMDItMTNUMTM6MTU6NTArMDA6MDDR4Z0WAAAAKHRFWHRkYXRlOnRp
bWVzdGFtcAAyMDIzLTAyLTEzVDEzOjE1OjUxKzAwOjAwIIO3fQAAAABJRU5ErkJggg=="
          />
        </svg>
        <div class="box">
          <input class="otp--form--input" type="password" />
          <input class="otp--form--input" type="password" />
          <input class="otp--form--input" type="password" />
          <input class="otp--form--input" type="password" />
        </div>
        <button class="otp--form--btn1">Submit</button>
        <button class="otp--form--btn2">Back</button>
      </form>
    </main>`;
export const otpCssCode: string = `#otp--form--main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.otp--form--form:hover {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  scale: 0.99;
}



.otp--form--check {
  position: relative;
  align-self: center;
  top: 1em;
}


.otp--form--input:hover {
  box-shadow: inset 0px 0px 0px #d1d1d1, inset 0px 0px 0px #ffffff;
  background-color: lightgrey;
}

.otp--form--input:focus {
  box-shadow: inset 0px 0px 0px #d1d1d1, inset 0px 0px 0px #ffffff;
  background-color: lightgrey;
}



.otp--form--btn1:active {
  box-shadow: inset 3px 3px 6px #b5b5b5, inset -3px -3px 6px #ffffff;
}



.otp--form--btn2:active {
  box-shadow: inset 3px 3px 6px #b5b5b5, inset -3px -3px 6px #ffffff;
}

  .otp--form--form {
    width: 290px;
    height: 380px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transition: 0.4s ease-in-out;
  }
  .otp--form--heading {
    position: relative;
    text-align: center;
    color: black;
    top: 3em;
    font-weight: bold;
  }

  .otp--form--input {
    position: relative;
    width: 2.5em;
    height: 2.5em;
    margin: 0.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: rgb(235, 235, 235);
    box-shadow: inset 3px 3px 6px #d1d1d1, inset -3px -3px 6px #ffffff;
    top: 6.5em;
    left: 1.5em;
    padding-left: 15px;
    transition: 0.4s ease-in-out;
  }
  .otp--form--check {
    position: relative;
    align-self: center;
    top: 4em;
  }
  .otp--form--btn1 {
    position: relative;
    top: 8.5em;
    left: 2.4em;
    width: 17em;
    height: 3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    box-shadow: 1px 1px 3px #b5b5b5, -1px -1px 3px #ffffff;
  }
  .otp--form--btn2 {
    position: relative;
    top: 9.5em;
    left: 2.4em;
    width: 17em;
    height: 3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    box-shadow: 1px 1px 3px #b5b5b5, -1px -1px 3px #ffffff;
  }

`;
