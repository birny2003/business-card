import React from "react";
import Icon from "../src/images/Icon.JPG";
import mailIcon from "../src/images/mail-icon.jpg";
export default function Info() {
  return (
    <header>
      <div>
        <img
          className="me"
          src={Icon}
          alt="Business card icon of Aryeh Birnbaum"
        ></img>
        <h2> Aryeh Birnbaum</h2>
        <h3>Frontend Developer</h3>
        <h4>aryehbirnbaum.website</h4>
        <a href="mailto:aryehbirnbaum@gmail.com">
          <button>
            {" "}
            <img className="mail-icon" src={mailIcon}></img>
            Email
          </button>
        </a>
      </div>
    </header>
  );
}
