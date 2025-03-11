import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Adjust path based on your project structure

function Header() {
    return (
        <motion.nav
            className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            <div className="container">
                {/* Logo and Brand */}
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img src={logo} alt="CommunionHub Logo" className="logo me-2" />
                    <span>CommunionHub</span>
                </a>

                {/* Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
}

export default Header;
