import React from "react";
import {connect} from "react-redux";
import {deleteUser, fetchUser} from "../../actions/users";
import Modal from "../Modal";
import history from "../../history";

class UserDelete extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <>
                <button onClick={() => this.props.deleteUser(id)}>Delete</button>
                <button onClick={() => this.props.history.goBack()}>Cancel</button>
            </>
        );
    }

    renderContent() {
        if (!this.props.user) {
            return 'Are you sure you want delete this user?';
        }
        return `Are you sure you want delete: ${this.props.user.firstName} ?`;
    }

    render() {
        return (
            <Modal
                title="Delete user"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/users')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {user: state.users[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchUser, deleteUser})(UserDelete);