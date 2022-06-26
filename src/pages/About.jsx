import React from "react";
import aboutBlog from '../assets/about_blog_img.jpg';

const About = () => {
  return (
    <div id="aboutPage__container">
      <div id="content__container">
        <h1 id="about__heading">The South Village Digital Blog</h1>
      </div>
      <div id="about__img--container">
        <img src={aboutBlog} alt="" />
      </div>
    </div>
  );
};

export default About;
