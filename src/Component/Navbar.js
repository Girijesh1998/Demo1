import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
import cart from './image/cart.png';
import search from './image/search.png';
import vector from './image/vector.jpg';
import Navbar_logo from './image/Navbar_logo.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to=""><img src={Navbar_logo} className="Navbar_logo" alt="" srcset="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="Blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='About'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='Course'>Course</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='Contact'>Contact</Link>
                            </li>
                        </ul>
                        <ul className="d-none d-md-flex  navbar-nav ms-5">
                            <li className="nav-item">
                                <Link className="nav-link" to=''><img src={cart} className="cart" alt="" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to=''><img src={search} className="cart" alt="" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to=''><img src={vector} className="cart" alt="" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar