import React, { useEffect, useState,useRef  } from "react";
import "./../styles/Headers.css";
import "./../styles/fa/css/font-awesome.min.css";
import Notification from "./Notification";
import Message from "./Message";

import $ from "jquery";

function Headers() {
  const iconContainer = useRef(null);
  useEffect(() => {
    $("#toastNotification").show();
    $("#toastMessage").show();

    $("#search-btn").on("click", () => {
      $(".search-input input").toggleClass("slide-search");
    });
    $("#slide-menu-btn").on("click", () => {
      $(".sidebar").toggleClass("slide-sidebar"); 
      $(".content").toggleClass("slide-content");
      $(".menu li span").toggleClass("toggle-menu");
      $(".menu li i").toggleClass("toggle-icon");
    });
    $(".btn-show-notif").on('click',()=>{
      $("#notification").fadeToggle()
      $("#message").fadeOut()
    })
    $(".btn-show-message").on('click',()=>{
      $("#message").fadeToggle()
      $("#notification").fadeOut()
    })
    $(iconContainer.current).on("click", ".proprietaire", function () {
      $(this).toggleClass("fa-star fa-star-o");
    });
    $(iconContainer.current).on("click", ".confirmation-message", function () {
      $(this).toggleClass("fa-check-circle fa-check-circle-o");
    });
  }, []);

  return (
    <div>
      <div className="container" ref={iconContainer}>
        <div className="header">
          <div className="container header-content">
            <div className="app-name">
              <h3 className="text-primary">Resto-App</h3>
            </div>
            <div className="slide-menu">
              <i
                className="fa fa-align-center text-secondary center-absolute"
                id="slide-menu-btn"
              ></i>
            </div>
            <div className="search-input">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher"
              />
            </div>
            <div className="icon-content">
              <div className="container text-center">
                <div className="row">
                  <div className="col text-primary">
                    <i className="fa fa-search" id="search-btn"></i>
                  </div>
                  <div className="col text-primary">
                    <i className="fa fa-comments btn-show-message">
                      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                    </i>
                  </div>
                  <div className="col text-primary">
                    <i className="fa fa-bell btn-show-notif">
                      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                    </i>
                  </div>
                  <div className="col user-container">
                    <span
                      className="bg-primary border border-light rounded-circle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa fa-user"></i>
                    </span>
                    <div className="dropdown">
                      <button
                        className="text-primary"
                        type="button"
                        data-bs-toggle="dropdown"
                        id="dropdownMenuButton"
                      >
                        <i className="fa fa-caret-down"></i>
                      </button>
                      <ul className="dropdown-menu">
                        <div className="user-menu">
                          <li className="username">
                            <a className="dropdown-item text-primary">
                              Username
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">Profil</a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Modifier le mot de passe
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Se deconnecter <i className="fa  fa-sign-out"></i>
                            </a>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* TOAST NOTIFICATION */}
            <Notification />
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
