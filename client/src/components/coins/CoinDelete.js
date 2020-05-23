import React from "react";
import { connect } from "react-redux"
import { deleteCoin, fetchCoin } from "../../actions/coins"
import Modal from "../Modal";
import {NavLink} from "react-router-dom";

class CoinDelete extends React.Component{
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchCoin(id);
    }

    renderButtons = () => {
        const id = this.props.match.params.id;
        return (
            <>
                <button onClick={() => this.props.history.goBack()}>Cancel</button>
                <button onClick={() => this.props.deleteCoin(id)}>Delete</button>
            </>
        );
    }

    render() {
        const { coin } = this.props;
        return (
            <div>
                {
                    coin ? <Modal
                    title={'Delete Coin'}
                    content={'Are you sure you want to delete this coin?'}
                    actions={this.renderButtons()}
                    onDismiss={this.props.history.goBack}/> : 'Loading'
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return { coin : state.coins[id]}
}

export default connect(mapStateToProps, {deleteCoin, fetchCoin})(CoinDelete);