import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const openSocial = (link) => {
  window.open(link, "_blank");
};

const SocialMedia = () => (
  <div className="app__social">
    <div
      onClick={() => {
        openSocial("https://www.linkedin.com/");
      }}
    >
      <BsLinkedin />
    </div>
    <div
      onClick={() => {
        openSocial("https://github.com/");
      }}
    >
      <BsGithub />
    </div>
    <div
      onClick={() => {
        openSocial("https://twitter.com/");
      }}
    >
      <BsTwitter />
    </div>
  </div>
);

export default SocialMedia;
