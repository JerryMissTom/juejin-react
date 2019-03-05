import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import classnames from 'classnames';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './index.scss';
const navArray = [{
    router: '/',
    name: '首页'
},
{
    router: '/activities',
    name: '动态'
},
{
    router: '/topics',
    name: '话题'
},
{
    router: '/books',
    name: '小册'
},
{
    router: '/events',
    name: '活动'
}];

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    onChange = (e) => {
       // console.log(e);

    }

    render() {
        return (<div className={styles.headerContainer}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <Logo />
                    <nav className={styles.mainNav}>
                        <ul className={styles.navList}>
                            <li>
                                <Nav navArray={navArray} />
                            </li>
                            <li className={classnames(styles.navItem, styles.search)} >
                                <div className={styles.searchContainer}>
                                    <input placeholder="搜索更新啦" onChange={this.onChange} />
                                    <img className={styles.searchIcon}  src="https://b-gold-cdn.xitu.io/v3/static/img/juejin-search-icon.6f8ba1b.svg" />
                                </div>
                            </li>
                            <li className={classnames(styles.navItem, styles.submit)}>
                                <img className={styles.icon} src="https://b-gold-cdn.xitu.io/v3/static/img/submit-icon.53f4253.svg" />
                                <span>写文章</span>
                            </li>
                            <li className={classnames(styles.navItem, styles.auth)}>
                                <span className={styles.login}>登录</span>
                                <span className={styles.register}>注册</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>);
    }
}

export default Header;

const Logo = () => (<a href="/" className={styles.logo}><img src={logo} alt="掘金"></img></a>)

const Nav = (props) => {
    return (
        <ul className={styles.nav}>
            {props.navArray.map(item => (
                <li key={item.router} className={styles.navItem}> <NavLink exact to={item.router} activeClassName={styles.itemSelected}> {item.name}</NavLink> </li>
            ))}
        </ul>)
}