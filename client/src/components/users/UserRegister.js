import React from 'react';
import { connect } from 'react-redux';
import { createUser } from "../../actions/users";
import UserForm from "./UserForm";
import styles from "./styles/UserLogin.module.css"

class UserRegister extends React.Component {
    onSubmit = formValues => {
        this.props.createUser(formValues);
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h2>Registration</h2>
                <UserForm onSubmit={this.onSubmit} isAdmin={0}/>
            </div>
        );
    }
}

export default connect(null, { createUser })(UserRegister);