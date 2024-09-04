import React from "react";
import Twitter from "../src/images/Icontwitter.png";
import Facebook from "../src/images/Iconfacebook.png";
import Insta from "../src/images/Iconinsta.png";
import Linkedin from "../src/images/Iconlinkedin.png";

export default function SocialsFooter() {
  return (
    <footer className="footer">
      <container className="socials">
        <img className="Twitter" src={Twitter} alt="Twitter logo"></img>
        <img className="Facebook" src={Facebook} alt="Facebook logo"></img>
        <img className="Insta" src={Insta} alt="Instagram logo"></img>
        <img className="Linkedin" src={Linkedin} alt="Linkedin logo"></img>
      </container>
    </footer>
  );
}
