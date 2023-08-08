import React from "react";
import { useState } from "react";
import "./Nav.css";
import RegisterUser from "./RegisterUser";

const Nav = () => {
  // const [loginStatus, setLoginStatus] = useState(false);
  // const [register, setRegister] = useState(false);
  const [group, setGroup] = useState(false);
  const [recipeStatus, setRecipeStatus] = useState(false);
  const [inGroup, setInGroup] = useState(false);
  const [category, setCategory] = useState(false);

  // const changeLoginStatus = () => {
  //   if (!loginStatus) {
  //     setLoginStatus(true);
  //   } else setLoginStatus(false);
  // };

  // const registerUser = () => {
  //   if (!register) {
  //     setRegister(true);
  //   }
  // };

  //if my groups button is pushed
  const changeGroupsStatus = () => {
    if (!group) {
      setGroup(true);
      setRecipeStatus(false);
      setInGroup(false);
      setCategory(false);
    }
  };

  //if recipes button is pushed
  const changeRecipesStatus = () => {
    if (!recipeStatus) {
      setRecipeStatus(true);
      setGroup(false);
      setInGroup(false);
      setCategory(false);
    }
  };

  //if a group is chosen or pushed
  const inGroupStatus = () => {
    if (!inGroup) {
      setInGroup(true);
      setGroup(false);
    }
  };

  //if a category is chosen
  const handleCategoryChange = () => {
    if (!category) {
      setCategory(true);
    }
  };
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <p>logo</p>
        </div>
        <div>
          <div className="links">
            <ul>
              <li>
                <button onClick={changeGroupsStatus}>my groups</button>
              </li>
              <li>
                <button onClick={changeRecipesStatus}>my recipes</button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>login/logout/register</p>
        </div>
      </div>
      {group && (
        <div>
          <h1>MY GROUPS</h1>
          <div>
            <button onClick={inGroupStatus}>kleinman family</button>
            <button onClick={inGroupStatus}>disneyland</button>
          </div>
        </div>
      )}
      {recipeStatus && <h1>MY RECIPES</h1>}
      {inGroup && (
        <div>
          <h1>Category</h1>
          <button onClick={handleCategoryChange}>Dinner</button>
          <button>Lunch</button>
        </div>
      )}
      {category && (
        <div>
          <ul>
            <li>Pizza</li>
            <li>Lasgna</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
