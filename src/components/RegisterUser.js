import React from "react";
import axios from "axios";
import { useState } from "react";

const RegisterUser = ({ register, setRegister }) => {
  const [firstName, setFirstName] = useState("");

  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  const registerUser = () => {
    if (!register) {
      setRegister(true);
    } else setRegister(false);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    console.log(firstName);
    axios
      .post("http://localhost:3003/newUser", { firstName: firstName })
      .then((res) => {
        console.log(res.data);
      });
    setRegister(false);
  };

  return (
    <div>
      <div className="register-form">
        <form>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <button onClick={submitForm}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
