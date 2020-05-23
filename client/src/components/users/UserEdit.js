import React from 'react';
import {connect} from 'react-redux';
import {updateUser, fetchUser} from "../../actions/users";
import UserForm from "./UserForm";
import styles from "./styles/UserLogin.module.css"

class UserEdit extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.updateUser(this.props.match.params.id ,formValues);
    }

    render() {
        if (!this.props.user) {
            return <div>Loading...</div>
        }
        const { firstName, lastName, gender, email } = this.props.user;
        return (
            <div className={styles.wrapper}>
                <h2>Edit User</h2>
                <UserForm
                    initialValues={{firstName, lastName, gender, email}}
                    onSubmit={this.onSubmit}
                    isAdmin={1}
                />
            </div>
        );
    }
}

const mapStateToProps = ({users}, ownProps) => {
    return {user: users[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchUser, updateUser})(UserEdit);