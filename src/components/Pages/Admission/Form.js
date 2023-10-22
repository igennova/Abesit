import React, { Fragment, useState } from "react";
import "./Form.css";
import Fees from "./Fees";

const Form1 = () => {
  const [showerror, setshowerror] = useState(false);
  const [showmsg, setshowmsg] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fathersName: "",
    phone: "",
    courses: "",
  });

  const formhandler = (event) => {
    event.preventDefault();
    const { firstName, lastName, fathersName, phone, courses } = formData;

    // Check if all fields are not empty
    if (firstName && lastName && fathersName && phone && courses) {
      setshowmsg(true);
      setshowerror(false);
    } else {
      setshowmsg(false);
      setshowerror(true);
    }
    if ( phone.length > 11 || isNaN(phone) ){
      setshowmsg(false);
      setshowerror(true);
      

    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Fragment>
      {showmsg && <Fees />}
      {!showmsg && (
        <div className="hello">
          <form onSubmit={formhandler} className="hello2" action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstName"
              placeholder="Your name.."
              onChange={handleInputChange}
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastName"
              placeholder="Your last name.."
              onChange={handleInputChange}
            />

            <label htmlFor="fname">Fathers Name</label>
            <input
              type="text"
              id="fname"
              name="fathersName"
              placeholder="Your Father name.."
              onChange={handleInputChange}
            />

            <label htmlFor="lname">Phone No</label>
            <input
              type="text"
              id="lname"
              name="phone"
              placeholder="Your Phone Number"
              onChange={handleInputChange}
            />
            
          

            <label htmlFor="courses">Courses</label>
            <select id="courses" name="courses" onChange={handleInputChange}>
              <option value="">Select a course</option>
              <option value="CSE">CSE</option>
              <option value="CSE AI">CSE AI</option>
              <option value="CSE DS">CSE DS</option>
              <option value="CSE AI and ML">CSE AI and ML</option>
            </select>
            {showerror && <p className="error">Write the data in correct manner</p>}

            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default Form1;
