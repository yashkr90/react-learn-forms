import "./App.css";
import React, { useState } from "react";

function App() {
  const [detail, setDetail] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);

    // if(name=='fname')
    // {
    //   setDetail({fname:value,
    //     lname:"",
    //     email:"",
    //     phone:""});
    // }
    setDetail((prevdata) => {
      return {
        ...prevdata,
        [name]: value, // this name should be same as name provided in input
        // and initial value of useState() else new name will be added to object
      };
    });
  };
  const onSubmits = (event) => {
    console.log("subbmitted");
    event.preventDefault();
  };

  return (
    <>
      <form>
        <div className="maindiv">
          <h1>
            Enter your details
            {detail.fname} {detail.lname} {detail.email} {detail.phone}
          </h1>
          <div className="formdiv">
            <input
              type="text"
              name="fname"
              placeholder="Enter first name"
              // value={fname}
              onChange={HandleChange}
            ></input>
            <input
              type="text"
              name="lname"
              placeholder="Enter last name"
              // value={lname}

              onChange={HandleChange}
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={HandleChange}
            ></input>
            <input
              type="number"
              name="phone"
              placeholder="Enter phone no"
              onChange={HandleChange}
            ></input>
            <button onClick={onSubmits} type="submit">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
