import React, { Fragment } from "react";

import NavigationBar from "../Navigation";
import Image from "../Image/Image";
import "./Home.css";

const Home = () => {
  return (
    <Fragment>
      <NavigationBar />
      <div className="mainDiv">
        <Image />
        <h1 className="heading">Courses We Offer</h1>
        <div className="course-list">
          <div className="course-item">
            <p>B. Tech in Information Technology (NBA accredited)</p>
            <p>B.Tech. in Computer Science and Engineering (IoT)</p>
            <p>
              B. Tech Computer Science and Engineering (Artificial Intelligence)
            </p>
            <p>B.Tech. in Computer Science and Engineering (NBA accredited)</p>
            <p>B.Tech. in Computer Science and Engineering (DATA SCIENCE)</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Home;
