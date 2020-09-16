import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';



export default class Navbar extends Component  {
    state={ 
        isOpen: false
    }

    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render () {
        return (
            <nav className="navbar">
                <div classname="nav-center">
                    <div className="nav-header">
                        
                        <Link to="/">
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
        
                        <button 
                            type="button" classname="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight classname="nav-icon"/>
                        </button>
                    </div>

                    <ul 
                        classname={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
                        >
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>                  
                </div>    
            </nav>
        )       
    }
}