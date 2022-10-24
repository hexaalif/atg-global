import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Posts = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light my-3 container border-bottom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active border-bottom"
                  aria-current="page"
                  href="#"
                >
                  All Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Article
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Job
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <button className="btn btn-light me-2" type="submit">
              Write a Post <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <button className="btn btn-primary" type="submit">
              <FontAwesomeIcon icon={faUserGroup} /> Join Group
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Posts;
