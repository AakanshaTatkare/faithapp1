import React from "react";
import "./Style.css";
import courseData from "../Screens/Data/Course.json";
const Hero = () => {
  const { instructor, course, about_instructor, testimonial } = courseData;

  return (
    <>
      <div class="hero-image">
        <div class="hero-text">
          <h5>{instructor.name}</h5>
          <p>
            <b>{course.title}resolution</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
