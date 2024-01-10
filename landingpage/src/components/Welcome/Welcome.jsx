import "./Welcome.css";
import React from "react";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="note">
        <h1>Welcome to Nupium Academy: Your Gateway to the Future
<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 576 512"><path opacity="1" fill="#1E3050" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></h1>
        <p>Greetings future innovator,</p>
        <p>
           Are you curious about the technologies
          that are shaping our world and eager to be at the forefront of this
          revolution? Look no further. Nupium Academy is your pivotal step into
          the universe of Web3, Artificial Intelligence (AI), and the Internet
          of Things (IoT). Why Nupium Academy? At Nupium Academy, we're not just
          another IT school. We're an institution dedicated to equipping you
          with the knowledge and skills required to navigate and thrive in the
          rapidly evolving landscape of emerging technologies. Our courses are
          meticulously designed to prepare you for both semi-technical and
          technical roles within the Web3, AI, and IoT sectors – industries that
          are redefining the very fabric of our digital and physical worlds.
          Your Learning Pathways Recognizing the diverse needs and aspirations
          of our learners, we offer two distinct paths: Join the Vanguard as the
          digital age gallops forward; it beckons those willing to ride the
          wave, to understand the intricacies, and to be the architects of
          tomorrow. Whether you're a novice with a budding interest or a
          professional looking to up skill, Nupium Academy is committed to
          fostering your journey. Step into the future, equipped and empowered.
          We're excited to welcome you to Nupium Academy.
        </p>
        {/* <img src={note} alt="note" /> */}
      </div>
      <div className="perks">
        <h1>Perks of Nupium Programmes</h1>
        <h3>
<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/></svg>{" "}Standalone Introduction Programme [8 Hrs in 4 Sessions]</h3>
        <ul>
          <li>Course Certificate</li>
          <li>Course Material + Career Advice + Video Tutorials</li>
        </ul>
        <h3><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/></svg>{" "}Diploma in Emerging Technologies [12 Courses in One Year]</h3>
        <ul>
          <li>
            Total 12 Certificates [Every course comes with each certificate]
          </li>
          <li>Diploma [After completion of 1 year programme]</li>
          <li>
            Course Material + Career Advice + Video Tutorials + Placement
            Support
          </li>
        </ul>
        <h3><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path opacity="1" fill="black" d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm64-64c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32l-8.6 0C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64l0 88c0 22.1-17.9 40-40 40s-40-17.9-40-40l0-56c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 56c0 39.8 32.2 72 72 72z"/></svg>{" "}Degree in Web 3 Technologies [Two Year degree]</h3>
        <ul>
          <li>
            Total 12 Certificates [Every course comes with each certificate]
          </li>
          <li>Degree [After completion of 2 year programme]</li>
          <li>
            Course Material + Career Advice + Video Tutorials + Dedicated
            Placement Support{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Welcome;
