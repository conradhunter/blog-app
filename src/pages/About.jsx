import React from "react";
import aboutBlog from '../assets/about_blog_img.jpg';

const About = () => {
  return (
    <div id="aboutPage__container">
      <div id="content__container">
        <h1 id="about__heading">The South Village Digital Blog</h1>
        <p id="about__para">
          This blog is to educate readers on all things Web Development, eCommerce and Marketing.
        </p>
      </div>
      <div id="about__img--container">
        <img id="about__img" src={aboutBlog} alt="" />
      </div>
    </div>
  );
};

export default About;
