import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">HOTEL PARADISE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-outline-info" aria-current="page" href="/">Home</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-outline-info" aria-current="page" href="#">Reservations </a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-outline-info" aria-current="page" href="#">Financial</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-outline-info" aria-current="page" href="#">Customers</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-outline-info" aria-current="page" href="#">Restaurant</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-outline-info" aria-current="page" href="#">Employees</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-outline-info" aria-current="page" href="#">Suppliers</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-outline-info" aria-current="page" href="#">Extra-Facilities</a>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                        <a className="nav-link active" class="btn btn-primary" aria-current="page" href="#">Feedbacks</a>
                        </li>
                        &nbsp;
                        
                        <li className="nav-item dropdown">
                        
                        </li>
                    </ul>
                    
                    </div>
                </div>
                </nav>
                                
            </div>
        )
    }
}
