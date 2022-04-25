import React from "react";

export default function Filter({}) {

  return (
    <>
    <label htmlFor="nav__mobile--checked" className="nav__bars--btn">
      <i className="fas fa-bars"></i>
    </label><input type="checkbox" hidden name="" className="nav__input" id="nav__mobile--checked">
        <label htmlFor="nav__mobile--checked" className="nav__overlay"></label>
        <nav className="nav__mobile">
          <label htmlFor="nav__mobile--checked" className="nav__mobile--close">
            <i className="fas fa-times"></i>
          </label>
          <ul className="nav__mobile-list">
            <li>
              <a href="" className="nav__mobile-link">Home</a>
            </li>
            <li>
              <a href="" className="nav__mobile-link">About</a>
            </li>
            <li>
              <a href="" className="nav__mobile-link">Category</a>
            </li>
            <li>
              <a href="" className="nav__mobile-link">News</a>
            </li>
            <li>
              <a href="" className="nav__mobile-link">Contact</a>
            </li>
          </ul>
        </nav>
        )
      }
  </>
</>
