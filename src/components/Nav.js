import React from "react";
import { useState } from "react";
import "./Nav.css";
import RegisterUser from "./RegisterUser";

const Nav = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [register, setRegister] = useState(false);

  const changeLoginStatus = () => {
    if (!loginStatus) {
      setLoginStatus(true);
    } else setLoginStatus(false);
  };

  const registerUser = () => {
    if (!register) {
      setRegister(true);
    }
  };

  return (
    <div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>
            {!loginStatus && (
              <button onClick={changeLoginStatus}>Login Now</button>
            )}
          </li>
          <li>
            {loginStatus && (
              <button onClick={changeLoginStatus}>Logout The User</button>
            )}
          </li>
          <li>
            {!loginStatus && <button onClick={registerUser}>Register</button>}
          </li>
        </ul>
      </div>
      {register && (
        <RegisterUser register={register} setRegister={setRegister} />
      )}
    </div>
  );
};

export default Nav;
