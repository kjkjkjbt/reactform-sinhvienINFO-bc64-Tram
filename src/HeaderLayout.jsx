import React, { Component } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default class HeaderLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">
              Navbar
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className={clsx((props) => {
                      if (props.isActive) {
                        return "active";
                      } else {
                        return "";
                      }
                    }, "nav-link")}
                    to="/"
                  >
                    Trang chủ
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={clsx((props) => {
                      if (props.isActive) {
                        return "active";
                      } else {
                        return "";
                      }
                    }, "nav-link")}
                    to="/sinhvienInfo"
                  >
                    Student's INFO
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={clsx((props) => {
                      if (props.isActive) {
                        return "active";
                      } else {
                        return "";
                      }
                    }, "nav-link")}
                    to="life-cycle"
                  >
                    Lifecycle
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
