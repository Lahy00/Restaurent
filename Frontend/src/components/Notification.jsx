import React from "react";

function Notification() {
  return (
    <div
      className="form_notif toast-container position-fixed top-0 end-0 p-3"
      id="notification"
    >
      <div
        className="toast"
        id="toastNotification"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header entete_notif">
          <strong className="me-auto">Notification</strong>
          <small>Non lues</small>
          <button
            type="button"
            className="btn-close btn-show-notif"
            data-bs-dismiss="toast"
            aria-label="Close"
            title="Fermer"
          ></button>
        </div>
        <div className="toast-body">
          <ul className="list-group">
            <li className="list-group-item list-toast list-ajout">
              <div className="type-notif">
                <span className="rounded-circle mb-1 bg-primary text-light">
                  A
                </span>
              </div>
              <span className="text-notif">
                Ajout d'une nouvelle utilisateur
              </span>
              <div className="icon-action-notif">
                <i
                  className="fa fa-star-o text-warning proprietaire"
                  title="Prioritaire"
                ></i>
                <i className="fa fa-trash-o text-danger" title="Supprimer"></i>
              </div>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn-action-notif text-secondary"
                  title="Options"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v"></i>
                </button>
                <div className="dropdown-menu">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Rappeler plus tard
                      <i className="fa fa-clock-o text-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                      
                    </li>
                    <li className="list-group-item">
                      Détails
                      <i className="fa fa-bars text-primary"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="list-group-item list-toast list-ajout">
              <div className="type-notif">
                <span className="rounded-circle mb-1 bg-primary text-light">
                  A
                </span>
              </div>
              <span className="text-notif">
                Ajout d'une nouvelle utilisateur
              </span>
              <div className="icon-action-notif">
                <i
                  className="fa fa-star-o text-warning proprietaire"
                  title="Prioritaire"
                ></i>
                <i className="fa fa-trash-o text-danger" title="Supprimer"></i>
              </div>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn-action-notif text-secondary"
                  title="Options"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v"></i>
                </button>
                <div className="dropdown-menu">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Rappeler plus tard
                      <i className="fa fa-clock-o text-secondary"></i>
                    </li>
                    <li className="list-group-item">
                      Détails
                      <i className="fa fa-bars text-primary"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="toast-footer pied_notif">
          <a href="">Voir les historiques</a>
        </div>
      </div>
    </div>
  );
}

export default Notification;
