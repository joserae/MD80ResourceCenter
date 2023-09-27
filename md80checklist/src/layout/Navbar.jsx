import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">MD-80 Resource center</Link>

                {/* hamburger menu */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-2">
                        <li className="nav-item">
                            <Link className="nav-link active light" aria-current="page" to='/normalChecklist'>Normal Checklist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/limitations">Limitations</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Emergency Procedures</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Specifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">V-Speed Cards</a>
                        </li>
                    </ul>
                    
                    <form className="d-flex" role="search">
                        <button className="btn btn-outline-success" type="submit">Sign in</button>
                        <Link className='btn btn-outline-success' to="/createUser">Sign up</Link>
                        <Link className="btn btn-outline-success" to="/admin">Admin</Link>
                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
};

//<Link className="navbar-brand" to="/">MD-80 Resource center</Link>
//<Link className='btn btn-outline-success' to="/createUser">Sign up</Link>