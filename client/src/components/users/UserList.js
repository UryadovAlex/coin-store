import React from "react";
import {connect} from "react-redux";
import {fetchUsers, deleteUser} from "../../actions/users";
import {Link} from 'react-router-dom';
import styles from './styles/UserList.module.css';
import delIcon from '../../images/del.png';
import edit from '../../images/Editing-Edit-icon.png';

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderButtons(user) {
        return (
            <div className={styles.buttons}>
                <Link to={`/users/edit/${user.id}`} className={`${styles.button} ${styles.violet}`}>
                    <img src={edit} alt=""/>
                </Link>
                <Link to={`/users/delete/${user.id}`} className={`${styles.button} ${styles.red}`}>
                    <img src={delIcon} alt=""/>
                </Link>
            </div>
        );
    }

    renderListUsers = () => {
        return this.props.users.map(user => {
            return (
                <div className={styles.item} key={user.id}>
                    {this.renderButtons(user)}
                    <div className="content">
                        Name: {user.firstName}
                        <div className="description">Email: {user.email}</div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <h2>{+this.props.isAdmin ? 'Users' : 'Access forbidden: 403'}</h2>
                <div className="ui celled list">
                    {this.renderListUsers()}
                </div>
            </div>
        );
    }
}

const mapStoreToProps = (state) => {
    return {
        users: Object.values(state.users),
        isAdmin: state.loggedUser.isAdmin
    };
}

export default connect(mapStoreToProps, {fetchUsers, deleteUser})(UserList);