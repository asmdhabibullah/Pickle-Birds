import React from 'react';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({ scrolling: false });
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
        }
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top"
                style={{ color: '#06DCD6', borderWidth: 0, position: this.state.scrolling ? 'fixed' : 'relative', top: 0, width: '100vw', zIndex: 1 }}
                onScroll={this.handleScroll}
            >
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={`${process.env.PUBLIC_URL}/assets//images/logo.png`} alt="PICKLE BIRDS" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home
                            </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/all-projects">All-Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/all-cources">All-Cource</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog-posts">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}



export default Header;