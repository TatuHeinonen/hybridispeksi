import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import auth from '../../Utils/Auth';

class AdminHeader extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/admin">HybridiSpeksi</Link>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/admin">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/produktionhallinta">Produktio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/jasenrekisteri">Jäsenrekisteri</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <div onClick={auth.signOut}>Kirjaudu ulos</div>
                      </span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default AdminHeader