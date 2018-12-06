import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import styles from './header.css';
import { Link, NavLink } from "react-router-dom";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<header className="main-header visible">
            <div className="container">
                <a href="/" className="logo">
                    <img src={logo} alt="掘金"/>
                </a>
                <nav className="main-nav">
                    <ul className="nav-list">
                        <li>
                            <ul className="main-nav-list">
                                <li className="nav-item">
                                <Link to="/">首页</Link>
                    </li>
                                <li className="nav-item">
                                <NavLink to="/about" activeClassName="hurray">
                                动态
</NavLink>    
                    </li>
                                <li className="nav-item">
                                <Link to="/users">小册</Link>         
                    </li>
                                <li className="nav-item">
                                <Link to="/users">开源库</Link>           
                    </li>
                                <li className="nav-item">
                                <Link to="/users">活动</Link> 
                    </li>
                            </ul>
                        </li>
                        <li className="nav-item search">
                            搜索
                        </li>
                        <li className="nav-item add">
                            搜索
                        </li>
                        <li className="nav-item notification">
                            搜索
                        </li>
                        <li className="nav-item menu">
                            搜索
                        </li>
                    </ul>
                </nav>
            </div>
        </header>);
    }
}

export default Header;