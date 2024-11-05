import {Link} from 'react-router-dom';

export function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
            <div className="container">
                <link className="navbar-brand" to="/">
                    <img src="./public/images/icon.png" alt="dev" al='...' width= '30' className="me-2"/>Best Store
                </link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <link className="nav-link text-dark" aria-current="page" to="/">Home</link>
                            </li>
                            <li className="nav-item">
                                <link className="nav-link text-dark" to="/contact">Contact</link>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin
                            </a>
                            <ul className="dropdown-menu"> 
                                <li><link className="dropdown-item" to="/Products">Products</link></li>
                                <li><link className="dropdown-item" to="/Profile">Profile</link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><link className="dropdown-item" to="/Logout">Logout</link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    )
}


export function Footer() {
    return (
        <footer className="bg-dark py-3 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <img src="./public/images/icon.png" alt="dev" al='...' width= '30' className="me-2"/>   
                        <p>�� 2024 Best Store. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}