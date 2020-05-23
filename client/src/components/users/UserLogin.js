import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../../actions/users"
import {Link} from "react-router-dom";
import styles from "./styles/UserLogin.module.css";

class UserLogin extends React.Component{
    state = {
        email: '',
        password: '',
        success: 1
    }



    onInputChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        this.setState({success: this.props.success});
        this.props.userLogin({...this.state});
    }

    render() {
        return (
            <div className={styles.wrapper}>
                {!this.state.success && <h3 className={styles.red}>Invalid login or password</h3>}
                <form onSubmit={this.onSubmit}>
                    <div className={styles.form_filed}>
                        <label>Login</label>
                        <input type="text"
                               name="email"
                               onChange={this.onInputChange}
                               value={this.state.email}
                        />
                    </div>
                    <div className={styles.form_filed}>
                        <label>Password</label>
                        <input type="password"
                               name="password"
                               onChange={this.onInputChange}
                        />
                    </div>
                    <button className={styles.button}>Login</button>
                </form>
                <div>
                    <span>Not registered? </span>
                    <Link to="/users/new" className="item">
                        Registration
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({loggedUser}) => {
    return {success: loggedUser.success};
}

export default connect(mapStateToProps, {userLogin})(UserLogin);