import React from "react";
import {connect} from "react-redux"
import {userLogout} from "../../actions/users"
import Modal from "../Modal";

class UserLogout extends React.Component {
    renderButtons = () => {
        const id = this.props.match.params.id;
        return (
            <>
                <button onClick={() => this.props.history.goBack()}>Cancel</button>
                <button onClick={() => this.props.userLogout()}>Logout</button>
            </>
        );
    }

    render() {
        return (
            <div>
                <Modal
                    title={'Logout'}
                    content={'Are you sure you want to logout ?'}
                    actions={this.renderButtons()}
                    onDismiss={this.props.history.goBack}
                />
            </div>
        );
    }
}

export default connect(null, {userLogout})(UserLogout);