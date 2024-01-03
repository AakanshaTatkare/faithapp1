import Hero from "@/app/Screens/Hero";
import Navbar from "@/app/Screens/Navbar";
import React from "react";
import "./Home.css";
import TextCarousel from "./textcarousel"; 
import courseData from "../Screens/Data/Course.json";

const Home = () => {
  const { instructor, course, about_instructor, testimonial } = courseData;
  const socialMediaImages = {
    facebook:
      "https://tse1.mm.bing.net/th?id=OIP.zaiIl16zqTKDuhYIxeop0wHaHa&pid=Api&P=0&h=180",
    twitter:
      "https://tse4.mm.bing.net/th?id=OIP.H836RvDYYgQZcZn0TC8qBAHaHa&pid=Api&P=0&h=180",
    youtube:
      "https://tse2.mm.bing.net/th?id=OIP.1hX8tUyNC8XTZ8u6BLuGEAHaHa&pid=Api&P=0&h=180",
    instagram:
      "https://tse1.mm.bing.net/th?id=OIP.CdXf6YqwWlf5KO3_ceoG_AHaHa&pid=Api&P=0&h=180",
  };

  return (
    <>
    <div>
      <Hero />
      <Navbar />

      <div className="card">
        <h2>
          <b>Course Fees</b>
        </h2>
        <p >
          <b className="pricecard">
            {course.fee.amount} {course.fee.currency}
          </b>
        </p>
        <h4>
          <b>What`&apos;`s Included</b>
        </h4>
        <ul>
          <li className="lists">
            📺 {course.inclusions.on_demand_videos} on-demand videos
          </li>
          <li className="lists">
            📺 {course.inclusions.live_qa_sessions ? "Live Q&A Sessions" : ""}
          </li>
          <li className="lists">
            💬{" "}
            {course.inclusions.whatsapp_community
              ? "Active WhatsApp community"
              : ""}
          </li>
        </ul>
        <button className="register-button">Register</button>
      </div>

      <div className="Main">
        <div className="main1">
          <h1>
            <b>ABOUT THE COURSE </b>
            <br /> <br />
          </h1>
          <p>
            Sunt pariatur culpa culpa duis. Duis consectetur quis nisi Lorem eu
            consequat enim id mollit pariatur consectetur. Ullamco veniam cillum
            officia exercitation adipisicing sint. Quis incididunt velit cillum
            labore. Ex officia eiusmod aliqua laborum. Id labore ipsum occaecat et
            incididunt. Ut elit qui ad id reprehenderit exercitation elit ex do.
          </p>
          <br />
          <p>
            Elit velit duis qui sint et mollit irure sunt enim labore exercitation
            aliquip excepteur. Dolor id reprehenderit pariatur dolor nisi ea
            ullamco fugiat duis elit deserunt. Minim est aliqua veniam consectetur
            ea dolore id laborum occaecat amet consequat ipsum incididunt.
          </p>
          <br />
          <p>
            Elit velit duis qui sint et mollit irure sunt enim labore exercitation
            aliquip excepteur. Dolor id reprehenderit pariatur dolor nisi ea
            ullamco fugiat duis.
          </p>
          <br /> <br /> <br />
          <h1>
            <b>WHAT YOU EXPECT FROM THE COURSE</b>
            <br /> <br />
            <p>
              Elit velit duis qui sint et mollit irure sunt enim labore
              exercitation aliquip excepteur. Dolor id reprehenderit pariatur
              dolor nisi ea ullamco fugiat duis elit deserunt. Minim est aliqua
              veniam consectetur ea dolore id laborum occaecat amet consequat
              ipsum incididunt. Eu laboris veniam anim magna quis sit mollit.
              Culpa do eu tempor qui duis ea ipsum reprehenderit mollit ex laborum
              fugiat duis.
            </p>
            <br />
            <br />
            <ul>
              <li className="lists">Learn to manage your Relationship</li>
              <li className="lists">Better communication</li>
              <li className="lists">Time Managment</li>
              <li className="lists">Forgivness</li>
            </ul>
          </h1>
          <br /> <br />
          <h1>
            <b>KEY TOPICS COVERED</b>
            <br /> <br />
          </h1>
          <p
            className="lists"
            dangerouslySetInnerHTML={{ __html: course.key_topics.html_content }}
          />
        </div>
        <br /> <br />
        <div className="main2">
          <h1>
            <b>ABOUT THE INSTRUCTOR</b>
            <br /> <br />
            <div className="horizontal-container">
              <div className="circular-image-container">
                <img
                  src="/img2.jpg"
                  alt="Description of the image"

                />
              </div>
              <p>
                Voluptate commodo ullamco elit nulla adipisicing veniam. Occaecat
                anim dolore enim amet nulla. Minim ut est quis magna.Cupidatat
                elit id ad proident. Pariatur sunt deserunt sunt amet nisi labore
                anim laborum minim ad aute. Ut aute sunt nostrud ad do pariatur.
                Dolor id ex fugiat incididunt cupidatat duis anim mollit
              </p>

              <p>
                Cupidatat elit id ad proident. Pariatur sunt deserunt sunt amet
                nisi labore anim laborum minim ad aute. Ut aute sunt nostrud ad do
                pariatur. Dolor id ex fugiat incididunt cupidatat duis anim mollit
                incididunt ipsum sint aliqua sunt. Eu consectetur aute aliqua in
                cupidatat do irure ipsum nulla laboris ad exercitation.
              </p>
            </div>
          </h1>
        </div>
      </div>

      <div className="social-media-container">
        {Object.entries(instructor.social_media).map(
          ([platform, isActive], index) =>
            isActive && (
              <div key={platform} className="social-media-item">
                <img
                  src={socialMediaImages[platform]}
                  alt={`${platform} icon`}
                  width={30}
                  height={30}
                />
                <span>
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </span>
              </div>
            )
        )}
      </div>
      
    

      <div className="testimonial-container">
      <TextCarousel/>
      </div>
    </div>
    </>
  );
};
export default Home;
