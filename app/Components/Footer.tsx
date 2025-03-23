import React from "react";
import GithubLogo from "./Logos/GithubLogo";
import LinkedinLogo from "./Logos/LinkedinLogo";

const Footer = () => {
  return (
    <div className="flex justify-center mt-5 p-10 space-x-5 ">
      <p>Mounir Lbath © 2025</p>
      <GithubLogo link="https://github.com/mounirLbath" />
      <LinkedinLogo link="https://linkedin.com/in/mounir-lbath" />
    </div>
  );
};

export default Footer;
