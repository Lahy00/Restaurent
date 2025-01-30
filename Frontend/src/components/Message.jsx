import React from "react";

function Message() {
  return (
    <div
      className="form_notif toast-container position-fixed top-0 end-0 p-3"
      id="message"
    >
      <div
        className="toast"
        id="toastMessage"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header entete_notif">
          <strong className="me-auto">Message</strong>
          <small>Nouveaux messages</small>
          <button
            type="button"
            className="btn-close btn-show-message"
            data-bs-dismiss="toast"
            aria-label="Close"
            title="Fermer"
          ></button>
        </div>
        <div className="toast-body">
          <ul className="list-group">
            <li className="list-group-item list-toast list-message">
              <div>
                <div className="statut-message">
                  <i className="fa fa-envelope text-secondary open-message"></i>
                </div>
                <div className="message-titre">
                  <a href="">
                    <small className="source-message">Serveuse n°1</small>
                  </a>
                  <small className="text-titre-message text-secondary">
                    Commande d'une pizza avec jus ..
                  </small>
                  <div className="message-complet">
                    <small>
                      Commande d'une pizza avec jus avec une tacos et pomme
                      frittes plus cocaCola Lorem ipsum dolor sit, amet
                      consectetur adipisicing elit. Culpa blanditiis voluptate
                    </small>
                    <div className="footer-message">
                      <div className="dt-message">
                        <small className="text-secondary">13:45:23</small>
                      </div>
                      <div className="repond-message">
                        <i className="fa fa-reply" title="Répondre"></i>
                        <i className="fa fa-share" title="Transférer"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="icon-action-notif">
                  <i
                    className="fa fa-check-circle-o text-primary confirmation-message"
                    title="Confirmer"
                  ></i>
                  <i
                    className="fa fa-star-o text-warning proprietaire"
                    title="Prioritaire"
                  ></i>
                  <i
                    className="fa fa-trash-o text-danger"
                    title="Supprimer"
                  ></i>
                  <div className="dropdown">
                  <i className="fa fa-ellipsis-v options" title="Options" data-bs-toggle="dropdown"></i>
                    <div className="dropdown-menu">
                      <ul className="list-group">
                        <li className="list-group-item">
                          Rappeler plus tard
                          <i
                            className="fa fa-clock-o text-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          ></i>
                        </li>
                        <li className="list-group-item">
                          Détails
                          <i className="fa fa-bars text-primary"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
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

export default Message;
