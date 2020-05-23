import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import styles from './Header.module.css';
import "../styles.css"

class Header extends React.Component {
    renderMenu = () => {
        if (this.props.user.id) {
            const {id, name, isAdmin} = this.props.user;
            return (
                <div className={styles.menu}>
                    <div className={styles.menu_item}>
                        <NavLink activeClassName={styles.underscore} to="/" className="item">
                            Coins
                        </NavLink>
                    </div>
                    <div className={styles.menu_item}>
                        <NavLink to={+isAdmin ? '/users' : `/cart/${id}`}>
                            {+isAdmin ? 'Users' : 'Cart'}
                        </NavLink>
                    </div>
                    <div className={styles.menu_item}>
                        <p className={styles.name}>Hello, {+isAdmin ? 'Admin' : name}</p>
                    </div>
                    <div className={styles.menu_item}>
                        <NavLink to="/users/logout">
                            Logout
                        </NavLink>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.menu}>
                    <div className={styles.menu_item}>
                        <NavLink to="/users/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <Link to="/">
                    <p className={styles.logo}>COIN STORE</p>
                </Link>
                {this.renderMenu()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        user: state.loggedUser
    }
}

export default connect(mapStateToProps, {})(Header);