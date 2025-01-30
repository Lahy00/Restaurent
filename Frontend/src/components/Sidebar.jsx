import React from "react";
import "./../styles/Sidebar.css";
import "./../styles/fa/css/font-awesome.min.css";
function Sidebar() {
  return (
    <div className="col-md-2">
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="menu">
            <ul className="list-group">
              <li className="list-group-item text-light bg-primary">
                <div>
                  <i className="fa fa-home"></i>
                  <span>Tableau de bord</span>
                </div>
              </li>
              <li className="list-group-item text-secondary">
                  <i className="fa fa-user"></i>
                  <span>Utilisateur</span>
              </li>
              <li className="list-group-item text-secondary">
                <div>
                  <i className="fa fa-group"></i>
                  <span>Client</span>
                </div>
              </li>
              <li className="list-group-item text-secondary">
                <div>
                  <i className="fa fa-shopping-cart"></i>
                  <span>Commande</span>
                </div>
              </li>
              <li className="list-group-item text-secondary">
                <div>
                  <i className="fa fa-hourglass"></i>
                  <span>Stock</span>
                </div>
              </li>
              <li className="list-group-item text-secondary">
                <div>
                  <i className="fa fa-wpforms"></i>
                  <span>Menu</span>
                </div>
              </li>
              <li className="list-group-item text-secondary">
                <div>
                  <i className="fa fa-cutlery"></i>
                  <span>Ingrédients</span>
                </div>
              </li>
              <li className="list-group-item text-secondary">
                <div>
                  <i className="fa fa-money"></i>
                  <span>Solde</span>
                </div>
              </li>
              <li className="list-group-item text-secondary">
                <div>
                  <i className="fa fa-cogs"></i>
                  <span>Paramètre</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="resto-name">
            <span className="resto-logo bg-secondary border border-light rounded-circle">
              <i className="fa fa-building-o"></i>
            </span>
            <span className="name-resto text-secondary">Restaurent name</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;