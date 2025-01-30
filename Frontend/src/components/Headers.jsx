import React, { useEffect, useState, useRef } from "react";
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
    $(".btn-show-notif").on("click", () => {
      $("#notification").fadeToggle();
      $("#message").fadeOut();
    });
    $(".btn-show-message").on("click", () => {
      $("#message").fadeToggle();
      $("#notification").fadeOut();
    });
    $(iconContainer.current).on("click", ".proprietaire", function () {
      $(this).toggleClass("fa-star fa-star-o");
    });
    $(iconContainer.current).on("click", ".confirmation-message", function () {
      $(this).attr("class", "fa fa-check-circle text-primary");
    });
    $(iconContainer.current).on("click", ".options", function () {
      $(this).closest(".list-message").find(".btn-action-notif").click();
    });
    $(iconContainer.current).on("click", ".open-message", function () {
      $(this).closest(".list-message").find(".message-complet").slideToggle();
      $(this)
        .closest(".list-message")
        .find(".text-titre-message")
        .toggleClass("cache-titre-message");
    });
  }, []);
  return (
    <div className="container-fluid d-flex position-relative header" ref={iconContainer}>
      <div className="container-fluid d-flex position-absolute start-0 h-100">
        <div className="position-absolute d-flex w-100 h-100 bg-secondary start-0">
          <div className="row position-absolute w-100 h-100 start-0 ms-0">
            <div className="col-md-2 bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
