import React from "react";
import { NavLink } from "react-router-dom";
import User from "./componant/User";


const Menu = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <nav class="navbar navbar-expand-lg navbar-white bg-dark pl-200">

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav nav-content">
                                    <a class="nav-item nav-link active float-right" href="#"><NavLink exact to="/User">users </NavLink> </a>
                                    <a class="nav-item nav-link" href="#"><NavLink exact to="/Contact">Contact </NavLink></a>
                                    <a class="nav-item nav-link" href="#">  <NavLink exact to="/About">About </NavLink></a>
                                    <a class="nav-item nav-link disabled" href="#"><NavLink exact to="/Info">info </NavLink></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <NavLink exact to="/User">users </NavLink>  */}





        </>
    )
}
export default Menu;